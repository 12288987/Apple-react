import logo from "../images/icons/logo.png"
import search from "../images/icons/search-icon.png"
import cart from "../images/icons/cart.png"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="backGR py-1">
    <div className="container">
      <ul className="row navv">
        <li className="col-9 col-md aplogo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </li>
        <li className="col-md d-none d-md-block"><a href="/mac/">Mac</a></li>
        <li className="col-md d-none d-md-block"><a href="/iphone/">iphone</a></li>
        <li className="col-md d-none d-md-block"><a href="#">ipad</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Watch</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Tv</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Music</a></li>
        <li className="col-md d-none d-md-block"><a href="#">Support</a></li>
        <li className="col-1 col-md d-md-block">
          <Link to="/search"><img src={search} alt="" /></Link>
        </li>
        <li className="col-1 col-md d-md-block">
          <Link to="/cart"><img src={cart} alt="" /></Link>
        </li>
        <li className="col-1 col-md d-md-none fontas">
          <i className="fa-solid fa-bars op" id="op"></i>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default Header;