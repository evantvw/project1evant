const Pizza = ({ data }) => {
  return (
    <li className={`pizza ${data.soldOut ? "soldout" : ""}`}>
      <img
        src={data.photoName}
        alt={data.name}
        className={`img ${data.soldOut ? "grayscale opacity-80" : ""}`}
      />
      <div className="flex flex-col gap-2">
        <h3 className="h3">{data.name}</h3>
        <p className="p font-light">{data.ingredients}</p>
        <span className="span">{data.soldOut ? "SOLD OUT" : data.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
