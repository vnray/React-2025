import { useEffect, useState } from "react";
import { Img_CDN } from "../ImgCdn/Img_CDN";

const Menu = () => {
  const [navMenu, setNavMenu] = useState([]);

  useEffect(() => {
    getMenuItem();
  }, []);

  const getMenuItem = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4694432&lng=77.0325445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      const menuItem = data?.data?.cards[0].card.card.imageGridCards.info;
      setNavMenu(menuItem);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="navWrapper">
        <h2>What's on your mind?</h2>
        <div className="itemWrapper">
          {navMenu.map((item) => {
            return (
              <div className="wrapper" key={item.id}>
                <img src={Img_CDN + item.imageId} alt={item.action.text} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
