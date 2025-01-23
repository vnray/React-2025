import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png"
import { Img_CDN } from "../ImgCdn/Img_CDN";
const RestaurantMenu = ()=>{
    const [menu, setMenu] = useState([])
const {resId}=useParams()
    useEffect(()=>{
menuData();
    },[])

    const menuData = async()=>{
try {
    const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4694432&lng=77.0325445&restaurantId="+resId)
    const data = await res.json()
    const cardItem = data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
console.log(cardItem.itemCards)
    setMenu(cardItem);
} catch (error) {
    console.log(error)
}
    }
// console.log("menu :" + Object.values(menu))
    return(
        <>
        <h2>this is id:1234</h2>
        <div className="menuCardWrapper">
        {Object.values(menu).map((item)=>{
            return(
<div key={item.card.info.id} className="menuCard">
    <div className="menuCards">
    <div className="menuCardItem">
        <img src={menuIcon} alt="menuicon" />
        <h3>{item.card.info.name}</h3>
        <h3>₹{(item.card.info.price)/100}</h3>
        <p>{item.card.info.description}</p>
    </div>
    <div className="menuCardImg">
        <img src={Img_CDN+item.card.info.imageId} alt={item.card.info.name} />
        <div className="addBtn">
            <button>ADD</button>
            <p>Customisable</p>
        </div>
    </div>
    </div>
    <div className="divider"></div>
    </div>
                
            )
        })}
        </div>
        </>
    )
}

export default RestaurantMenu;