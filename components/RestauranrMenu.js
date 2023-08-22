import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { IMG_URL, MENU_API } from "../utils/Constants";
import { useParams } from "react-router-dom";

const RestauranrMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const { id } = useParams();

  const fetchData = async () => {
    // fetch data
    const data = await fetch(`${MENU_API}${id}`);
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData);
  };

  const collectedData =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card?.itemCards;

  console.log(collectedData);

  if (resInfo.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <>
      <h1>Hi</h1>
      {collectedData.map((res) => (
        <div className="map" key={res.card.info.id}>
          <img
            style={{ width: "200px" }}
            src={`${IMG_URL}/${res.card.info.imageId}`}
            alt={res.card.info.name}
          />
          <h1>{res.card.info.name}</h1>
          <h2>{res.card.info.defaultPrice / 100}</h2>
          <h2>{res.card.info.description}</h2>
        </div>
      ))}
    </>
  );
};

export default RestauranrMenu;
