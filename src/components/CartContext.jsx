import { createContext, useReducer } from "react";

// taking props
const CartContext = createContext({
 items: [],
 addItem: (item) => {},
 removeItem: (id) => {},
 clearCart: () => {},
});
///////////////////////////////
function cartReducer(state, action) {
 /////////////////////////////
 if (action.type === "add_Item") {
  const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id);
  const updatedItems = [...state.items];

  if (existingCartIndex > -1) {
   const existItem = state.items[existingCartIndex];
   const updatedItem = {
    ...existItem,
    quantity: existItem.quantity + 1,
   };
   updatedItems[existingCartIndex] = updatedItem;
  } else {
   updatedItems.push({ ...action.item, quantity: 1 });
  }
  return {
   ...state,
   items: updatedItems,
  };
 }
 ///////////////////////////////////
 if (action.type === "remove_Item") {
  const existingCartIndex = state.items.findIndex((item) => item.id === action.id);
  const existItem = state.items[existingCartIndex];
  const updatedItems = [...state.items];
  if (existItem.quantity === 1) {
   updatedItems.splice(existingCartIndex, 1);
  } else {
   const updatedItem = {
    ...existItem,
    quantity: existItem.quantity - 1,
   };
   updatedItems[existingCartIndex] = updatedItem;
  }
  return {
   ...state,
   items: updatedItems,
  };
 }
 //////////////////
 if (action.type === "clear_Cart") {
  return {
   ...state,
   items: [],
  };
 }
 return state;
}
////////////////////////////
export function CartContextProvider({ children }) {
 const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

 //////////////////////////
 function addItem(item) {
  dispatchCartAction({ type: "add_Item", item });
 }
 function removeItem(id) {
  dispatchCartAction({ type: "remove_Item", id });
 }
 function clearCart() {
  dispatchCartAction({ type: "clear_Cart" });
 }
 ///////////////////////////
 const cartContext = {
  items: cart.items,
  addItem,
  removeItem,
  clearCart,
 };
 //////////////////
 return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
export default CartContext;
