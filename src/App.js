import Header from "./Header";
import Menu from "./Menu";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
