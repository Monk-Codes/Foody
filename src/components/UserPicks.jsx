import { createContext, useState } from "react";

const UserPicks = createContext({
 picks: "",
 showCart: () => {},
 hideCart: () => {},
 showCheckout: () => {},
 hideCheckout: () => {},
});
export function UserPicksProvider({ children }) {
 const [userPicks, setUserPicks] = useState("");

 function showCart() {
  setUserPicks("cart");
 }
 function hideCart() {
  setUserPicks("");
 }
 function showCheckout() {
  setUserPicks("checkout");
 }
 function hideCheckout() {
  setUserPicks("");
 }

 const userPicksCtx = {
  picks: userPicks,
  showCart,
  hideCart,
  showCheckout,
  hideCheckout,
 };
 return <UserPicks.Provider value={userPicksCtx}>{children}</UserPicks.Provider>;
}
export default UserPicks;
