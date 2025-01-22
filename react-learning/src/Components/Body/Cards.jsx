import { useState } from "react";
import { useEffect } from "react";
import { Img_CDN } from "../ImgCdn/Img_CDN";
import RestaurantCard from "./RestaurantCard";

const Cards = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4694432&lng=77.0325445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4694432&lng=77.0325445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING  "
    );
    const data = await res.json();
    const title = data.data.cards[1].card.card.header.title;
    setTitle(title);
    setRestrauntList(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  const filterRes = restrauntList.filter((rest) => {
    return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
    // restraunt.info.cuisines.some((cuisine) =>
    //   cuisine.toLowerCase().includes(searchText.toLowerCase())
    // ) ||
    // restraunt.info.locality.toLowerCase().includes(searchText.toLowerCase())
  });

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Search</button>
      </div>
      <h2>{title}</h2>
      <div className="cards">
        {filterRes.map((restraunt) => {
          return (
           <RestaurantCard restraunt={restraunt} key={restraunt.info.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
