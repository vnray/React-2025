import { useState } from "react";
import { useEffect } from "react";
import { Img_CDN } from "../ImgCdn/Img_CDN";


const Cards = () => {
  
const [restrauntList, setRestrauntList] = useState([])
const [searchText, setSearchText] = useState("")
  useEffect(()=>{
    callApi();
  },[])

  async function callApi() {
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4694432&lng=77.0325445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    
     setRestrauntList( data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
  const filterRes = restrauntList.filter((rest) => {
    return (
      rest.info.name.toLowerCase().includes(searchText.toLowerCase()) 
      // restraunt.info.cuisines.some((cuisine) =>
      //   cuisine.toLowerCase().includes(searchText.toLowerCase())
      // ) ||
      // restraunt.info.locality.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="search">
        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
        <button>Search</button>
      </div>
    <div className="cards">

      {filterRes.map((restraunt)=>{
        return(
<div className="card" key={restraunt.info.id}>
        <img src={Img_CDN+restraunt.info.cloudinaryImageId} alt="banner" />
        <div className="cardInfo">
        <h3>{restraunt.info.name}</h3>
        <h3>{restraunt.info.avgRating}</h3>
        <h4>{restraunt.info.cuisines.join(", ")}</h4>
        <h4>{restraunt.info.locality}</h4>
        </div>
       
      </div>
      

        )
      })}
      </div>
    </div>
  );
};

export default Cards;
