const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="cursor-pointer">Pizza World</div>
      <div className="cursor-pointer tabs">Home</div>
      <div className="cursor-pointer tabs">Menu</div>
      <div className="cursor-pointer tabs">Cart</div>
      <div className="cursor-pointer tabs ml-auto">Sign Out</div>
    </nav>
  );
};

export default Navbar;
