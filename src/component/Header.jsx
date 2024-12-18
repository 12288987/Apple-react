import logo from "../images/icons/logo.png"
import search from "../images/icons/search-icon.png"
import cart from "../images/icons/cart.png"

function Header() {
  return (
        <header className="backGR py-1">
        <div className="container">
            <ul className="row">
            <li className="col text-center">
                <a href="#"><img src={logo} alt="" /></a>
            </li>
            <li className="col d-none d-md-block"><a href="#">Mac</a></li>
            <li className="col d-none d-md-block"><a href="#">iphone</a></li>
            <li className="col d-none d-md-block"><a href="#">ipad</a></li>
            <li className="col d-none d-md-block"><a href="#">watch</a></li>
            <li className="col d-none d-md-block"><a href="#">tv</a></li>
            <li className="col d-none d-md-block"><a href="#">Music</a></li>
            <li className="col d-none d-md-block"><a href="#">Support</a></li>
            <li className="col d-none d-md-block">
                <a href="#"><img src={search} alt="" /></a>
            </li>
            <li className="col d-none d-md-block">
                <a href="#"><img src={cart} alt="" /></a>
            </li>
            </ul>
        </div>
        </header>
  )
}

export default Header;