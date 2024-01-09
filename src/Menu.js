import Pizza from "./Pizza";

const Data = [
  {
    name: "New York Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "$6",
    photoName: "pict/new-york-pizza.jpg",
    soldOut: false,
    style: "american",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "$10",
    photoName: "pict/margherita.jpg",
    soldOut: false,
    style: "italian",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "$12",
    photoName: "pict/funghi.jpg",
    soldOut: false,
    style: "italian",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "$15",
    photoName: "pict/salamino.jpg",
    soldOut: true,
    style: "italian",
  },
  {
    name: "Chicago Thin Crust Pizza",
    ingredients: "Tomato sauce, mozarella, salsiccia sauce",
    price: "$18",
    photoName: "pict/Chicago.jpg",
    soldOut: false,
    style: "american",
  },
  {
    name: "Miami Pizza",
    ingredients: "Mozarella, gouda cheese, and ham",
    price: "$18",
    photoName: "pict/miami.jpg",
    soldOut: false,
    style: "american",
  },
];

const Menu = () => {
  return (
    <>
      <p className="p text-center font-medium">
        Experience the best of American and Italian pizzas, from Margherita to
        Miami Pizza, all crafted with organic ingredients in our stone oven.
      </p>

      <main className="menu">
        <div className="italian">
          <h2 className="h2">Italian Pizza</h2>
          <ul className="pizzas">
            {Data.filter((pizza) => pizza.style === "italian").map((pizza) => (
              <Pizza data={pizza} key={pizza.name} />
            ))}
          </ul>
        </div>
        <div className="american">
          <h2 className="h2">American Pizza</h2>
          <ul className="pizzas">
            {Data.filter((pizza) => pizza.style === "american").map((pizza) => (
              <Pizza data={pizza} key={pizza.name} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Menu;
