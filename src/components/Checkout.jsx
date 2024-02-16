import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "./CartContext";
import { currency } from "../assets/Formatting";
import InputTemp from "../assets/InputTemp";
import UserPicks from "./UserPicks";
import Button from "../assets/Btn";
import useHttp from "../assets/UseHttp";
import Error from "./Error";

const reqConfig = {
 method: "POST",
 headers: {
  "content-type": "application/json",
 },
};

export default function Checkout() {
 const cartCtx = useContext(CartContext);
 const userPicksCtx = useContext(UserPicks);
 const { data, isLoad: isSend, error, sendReq, clearData } = useHttp("http://localhost:3000/orders", reqConfig);
 const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

 function handleClose() {
  userPicksCtx.hideCheckout();
 }
 function handleFinish() {
  userPicksCtx.hideCheckout();
  cartCtx.clearCart();
  clearData();
 }
 function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const customerData = Object.fromEntries(data.entries());
  sendReq(
   JSON.stringify({
    order: {
     items: cartCtx.items,
     customer: customerData,
    },
   })
  );
 }

 let actions = (
  <>
   <Button type="button" textOnly onClick={handleClose}>
    Close
   </Button>
   <Button>Confirm Order</Button>
  </>
 );

 if (isSend) {
  actions = <span>Sending order</span>;
 }
 if (data && !error) {
  return (
   <Modal open={userPicksCtx.picks === "checkout"} onClose={handleFinish}>
    <h2 className="center">Yay🥳</h2>
    <p>Order Placed 😋</p>
    <p>Enjoy your food and keep coming back</p>
    <p className="modal-actions">
     <Button onClick={handleFinish}>Okay</Button>
    </p>
   </Modal>
  );
 }
 return (
  <Modal open={userPicksCtx.picks === "checkout"} onClose={handleClose}>
   <form onSubmit={handleSubmit}>
    <h2>Checkout</h2>
    <p>Total Amount:{currency.format(cartTotal)}</p>
    <InputTemp label="Full Name" type="text" id="name" />
    <InputTemp label="E-mail" type="email" id="email" />
    <InputTemp label="Street" type="text" id="street" />
    <div className="control-row">
     <InputTemp label="Postal Code" type="text" id="postal-code" />
     <InputTemp label="City" type="text" id="city" />
    </div>
    {error && <Error title="Failed to load" message={error} />}
    <p className="modal-actions">{actions}</p>
   </form>
  </Modal>
 );
}
