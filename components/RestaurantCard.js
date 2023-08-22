const ResturantCard = ({ resData, IMG_URL }) => {
  const { info } = resData;
  const {
    costForTwoString,
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    deliveryTime,
    id,
  } = info; // important stuff

  return (
    // <h1>Hi</h1>

    <div key={id} title={name} className="resCard">
      <div>
        <img src={`${IMG_URL}/${cloudinaryImageId}`} alt={name} />
      </div>
      <div className="resContent">
        <h3>{name}</h3>
        <h3>Cusines: {cuisines.join(", ")}</h3>
        <h3>Avg. Rating: {avgRating}</h3>
        <h3>Price:- {costForTwoString}</h3>
        <h3>Delivery Time: {deliveryTime} mins.</h3>
      </div>
    </div>
  );
};

export default ResturantCard;
