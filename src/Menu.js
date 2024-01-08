import Pizza from "./Pizza";

const Data = [
  {
    name: "New York Pizza",
    ingredients: "Tomato, mozarella, pepperoni, oregano",
    price: 6,
    photoName: "pict/new-york-pizza.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pict/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pict/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pict/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pict/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pict/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Miami Pizza",
    ingredients: "Mozarella, gouda cheese, ham, pepperoni, and picadillo beef",
    price: 18,
    photoName: "pict/miami-pizza.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <ul>
        {Data.map((pizza) => (
          <Pizza data={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
