const Pizza = ({ data }) => {
  return (
    <li>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "SOLD OUT" : data.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
