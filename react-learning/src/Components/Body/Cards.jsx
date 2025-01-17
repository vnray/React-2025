const Cards = () => {
  async function callApi() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    const rData =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]
        .info;
  }
  callApi();

  return <h1> card section</h1>;
};

export default Cards;
