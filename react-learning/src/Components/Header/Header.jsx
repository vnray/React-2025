import { Link } from "react-router-dom";

import logo1 from "../../assets/images.jpg";

const Header = () => {
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

            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact</li> */}
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
