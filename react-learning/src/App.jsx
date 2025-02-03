import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Card from "./Components/Body/Cards.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/Body/RestaurantMenu.jsx";
import { Provider } from "react-redux";
import store from "./Components/utils/store.js";
import Cart from "./Components/Cart.jsx";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Card />} />
              <Route path="restraunt/:resId" element={<RestaurantMenu />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
