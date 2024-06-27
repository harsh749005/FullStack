import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../public/logo.jpg';
function Navabar() {
  return (
    <>
    <div className="navmain">
        <div className="holder">
            <img src={logo} alt="" className="img"/>
        </div>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link"to="/aboutt">About Us</Link>
        <Link className="link"to="/services">Our Services</Link>
        <Link className="link" to="/inquery">Inquery</Link>
        <Link className="link"to="/client">Client</Link>
        <Link className="link"to="/contact">Contact</Link>
      </nav>
    </div>
    </>
  );
}

export default Navabar;
