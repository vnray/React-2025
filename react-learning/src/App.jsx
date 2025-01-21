import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Card from "./Components/Body/Cards.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/Body/RestaurantMenu.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Card/>} />
            <Route path="res" element={<RestaurantMenu/>}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
