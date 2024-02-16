import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { UserPicksProvider } from "./components/UserPicks";

function App() {
 return (
  <UserPicksProvider>
   <CartContextProvider>
    <Header />
    <Meals />
    <Cart />
    <Checkout />
    <Footer />
   </CartContextProvider>
  </UserPicksProvider>
 );
}

export default App;
