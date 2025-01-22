import { Img_CDN } from "../ImgCdn/Img_CDN";
const RestaurantCard = ({restraunt})=>{
    return(
        <>
         <div className="card">
              <img
                src={Img_CDN + restraunt.info.cloudinaryImageId}
                alt="banner"
              />
              <div className="cardInfo">
                <h3>{restraunt.info.name}</h3>
                <h3>{restraunt.info.avgRating}</h3>
                <h4>{restraunt.info.cuisines.join(", ")}</h4>
                <h4>{restraunt.info.locality}</h4>
              </div>
            </div>
        </>
    )
}

export default RestaurantCard;