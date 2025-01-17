import { useState } from "react";
import { useEffect } from "react";

const Cards = () => {
const [restrauntList, setRestrauntList] = useState([])
  useEffect(()=>{
    callApi();
  },[])

  async function callApi() {
  
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4694432&lng=77.0325445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    
     setRestrauntList( data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }


  return (
    <div className="cards">

      {restrauntList.map((restraunt)=>{
        return(
<div className="card" key={restraunt.info.id}>
        <img src={restraunt.info.cloudinaryImageId} alt="" />
        <h3>{restraunt.info.name}</h3>
        <h3>{restraunt.info.avgRating}</h3>
        <h4>{restraunt.info.cuisines.join(", ")}</h4>
        <h4>{restraunt.info.locality}</h4>
      </div>
        )
      })}
      
    </div>
  );
};

export default Cards;
