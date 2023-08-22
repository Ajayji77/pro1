import React, { useEffect, useState } from "react";
import { IMG_URL } from "../utils/Constants";
import ResturantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
// console.log(IMG_URL);

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const listOfRestaurants = arr[0]; // also works
  // const setListOfRestaurants = arr[1]; // also works

  // useEffect normal function call a callback function after component renders
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const searchFilterHandle = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurant);
  };

  // conditional rendering
  if (listOfRestaurants.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div className="parent">
      <div>
        <div className="parentDiv">
          <input type="text" value={searchText} onChange={handleChange} />
          <button onClick={searchFilterHandle}>Click</button>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.3;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Filter Top rated Restaurants
          </button>
        </div>
        <div className="parentInside">
          {filteredRestaurants.map((data, index) => {
            return (
              <Link
                className="linksty"
                to={`/restaurant/${data.info.id}`}
                key={index}
              >
                <ResturantCard resData={data} IMG_URL={IMG_URL} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
