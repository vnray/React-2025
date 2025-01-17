import {Link} from "react-router-dom"
// import {logo} from "./assets/myImages.jpg"
import {logo} from ".//assets/myImages.jpg"
const Header = () => {
  return (
    <header>
   <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            {/* <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link> */}
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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
