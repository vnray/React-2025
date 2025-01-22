import { useEffect, useState } from "react";

const RestaurantMenu = ()=>{
    const [menu, setMenu] = useState()

    useEffect(()=>{
menuData();
    },[])

    const menuData = async()=>{
try {
    const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4694432&lng=77.0325445&restaurantId=11748")
    const data = await res.json()
    console.log(data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards).map((item))
    setMenu(data);
} catch (error) {
    console.log(error)
}
    }

    return(
        <>
        <h2>this is id:1234</h2>
        {Object.values(menu.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards).map((item)=>{
            return(
                <h1>{item.card.info.name}</h1>
            )
        })}
        </>
    )
}

export default RestaurantMenu;