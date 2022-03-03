import './navStyle.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h4>My Portfolio</h4>
      </div>
      <ul className="nav-links">
        <li><a href="#intro">Home</a></li>
        <li><a href="#one">About Me</a></li>
        <li><a href="#work">Working Examples</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>    
  );
}

export default Navbar;
