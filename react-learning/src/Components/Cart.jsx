import { Img_CDN } from "./ImgCdn/Img_CDN";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./utils/CartSlice";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);

  const dispatch = useDispatch();

  const handleRemove = (id)=>{
dispatch(removeItem(id))
  }
  return (
    <div>
      <h2>cart</h2>
      <div className="menuCardWrapper">
      {cartItem.map((item) => {
        console.log(item);
        return (
          <div key={item.card.info.id} className="menuCard">
            <div  className="menuCards">
              <div className="menuCardItem">
                {/* <img src={menuIcon} alt="menuicon" /> */}
                <h3>{item.card.info.name}</h3>
                <h3>₹{item.card.info.price / 100}</h3>
                <p>{item.card.info.description}</p>
              </div>
               <div className="menuCardImg">
                                <img
                                  src={Img_CDN + item.card.info.imageId}
                                  alt={item.card.info.name}
                                />
                                <div className="addBtn">
                                  <button onClick={()=>handleRemove(item.card.info.id)}>
                                    {/* <div className="itemQuantatity">
                                    <span className="decriment">-</span>
                                    <span className="quantity">1</span>
                                    <span className="incriment">+</span>
                                    </div> */}
                                    Remove
                                    </button>
                                  <p>Customisable</p>
                                </div>
                              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Cart;
