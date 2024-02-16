import { currency } from "../assets/Formatting";
import Button from "../assets/Btn";
import { useContext } from "react";
import CartContext from "./CartContext";

export default function MealItem({ meal }) {
 const cartCtx = useContext(CartContext);
 function handleAddMealToCart() {
  cartCtx.addItem(meal);
 }
 return (
  <li className="meal-item">
   <article>
    <img src={`http://localhost:3000/${meal.image}`} alt="img" />
    <div>
     <h3>{meal.name}</h3>
     <p className="meal-item-price">{currency.format(meal.price)}</p>
     <p className="meal-item-description">{meal.description}</p>
    </div>
    <p className="meal-item-actions">
     <Button onClick={handleAddMealToCart}>Add to cart</Button>
    </p>
   </article>
  </li>
 );
}
