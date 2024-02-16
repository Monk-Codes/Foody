import { useContext } from "react";
import Button from "../assets/Btn";
import logoImg from "../assets/logo.png";
import CartContext from "./CartContext";
import UserPicks from "./UserPicks";

export default function Header() {
 const cartCtx = useContext(CartContext);
 const userPicksCtx = useContext(UserPicks);
 const totalCartItems = cartCtx.items.reduce((totalItems, item) => {
  return totalItems + item.quantity;
 }, 0);

 function handleShowCart() {
  userPicksCtx.showCart();
 }
 return (
  <header id="main-header">
   <div id="title">
    <img src={logoImg} alt="logo" />
   </div>
   <h1 className="center">Foody😋</h1>
   <nav>
    <Button textOnly onClick={handleShowCart}>
     Cart {totalCartItems}🛒
    </Button>
   </nav>
  </header>
 );
}
