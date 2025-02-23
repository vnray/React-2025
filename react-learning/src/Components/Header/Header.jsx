import { Link } from "react-router-dom";

import logo1 from "../../assets/logo1.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.item);
  return (
    <header>
      <div className="container navbar">
        <div className="logo">
          <img src={logo1} alt="logo" />
        </div>
        <nav>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <li>
              <Link to={"/about"}>About </Link>
            </li>
            {/* <li>
              <Link to={"/res"}>Menu </Link>
            </li> */}
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link to={"/cart"}>
              <li>Cart:{cartItem.length}</li>
            </Link>
          </ul>
        </nav>
        <div className="user">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
