import { useEffect, useState } from "react";

const RestaurantMenu = ()=>{
    const [menu, setMenu] = useState()

    useEffect(()=>{
menuData();
    },[])

    const menuData = async()=>{
try {
    const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=125878")
    const data = await res.json()
    console.log(data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    setMenu(data);
} catch (error) {
    console.log(error)
}
    }

    return(
        <>
        <h2>this is id:1234</h2>
        {/* {menuData.map((menu)=>{
           return(
            <h3>item name:</h3>
            
           )
        })} */}
        </>
    )
}

export default RestaurantMenu;