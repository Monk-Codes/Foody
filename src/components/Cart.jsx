import { useContext } from "react";
import { currency } from "../assets/Formatting";
import Modal from "./Modal";
import CartContext from "./CartContext";
import UserPicks from "./UserPicks";
import Button from "../assets/Btn";
import CartItem from "./CartItem";

export default function Cart() {
 const cartCtx = useContext(CartContext);
 const userPicksCtx = useContext(UserPicks);
 const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

 function handleCloseCart() {
  userPicksCtx.hideCart();
 }
 function handleGotoCheckout() {
  userPicksCtx.showCheckout();
 }
 return (
  <Modal className="cart" open={userPicksCtx.picks === "cart"} onClose={userPicksCtx.picks === "cart" ? handleCloseCart : null}>
   <h2>Your Cart 🛒</h2>
   <ul>
    {cartCtx.items.map((item) => (
     <CartItem key={item.id} name={item.name} qty={item.quantity} price={item.price} onIncre={() => cartCtx.addItem(item)} onDecre={() => cartCtx.removeItem(item.id)} />
    ))}
   </ul>
   <p className="cart-total">{currency.format(cartTotal)}</p>
   <p className="modal-actions">
    <Button textOnly onClick={handleCloseCart}>
     Close
    </Button>
    {cartCtx.items.length > 0 && <Button onClick={handleGotoCheckout}>Go to Checkout</Button>}
   </p>
  </Modal>
 );
}
