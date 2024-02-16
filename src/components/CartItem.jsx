import { currency } from "../assets/Formatting";

export default function CartItem({ name, qty, price, onIncre, onDecre }) {
 return (
  <li className="cart-item">
   <p>
    {name} - {qty} x {currency.format(price)}
   </p>
   <p className="cart-item-actions">
    <button onClick={onDecre}>-</button>
    <button>{qty}</button>
    <button onClick={onIncre}>+</button>
   </p>
  </li>
 );
}
