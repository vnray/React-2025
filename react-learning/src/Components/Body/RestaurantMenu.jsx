import { useEffect, useState } from "react";

const RestaurantMenu = ()=>{
    const [menu, setMenu] = useState([])

    useEffect(()=>{
menuData();
    },[])

    const menuData = async()=>{
try {
    const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4694432&lng=77.0325445&restaurantId=807690")
    const data = await res.json()
    const cardItem = data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
console.log(cardItem)
    setMenu(cardItem);
} catch (error) {
    console.log(error)
}
    }
// console.log("menu :" + Object.values(menu))
    return(
        <>
        <h2>this is id:1234</h2>
        {Object.values(menu).map((item)=>{
            return(
                <ul>
<h3 key={item.card.info.id}>{(item.card.info.name)}-{(item.card.info.price)}</h3>
                </ul>
                
            )
        })}
        </>
    )
}

export default RestaurantMenu;