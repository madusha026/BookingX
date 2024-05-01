import "./navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo"><b>BookingX.lk</b></span>
        </Link>
        {user ? user.username : (<div className="navItems">
          <button className="navButton"><b>Register</b></button>
          <button className="navButton"><b>Login</b></button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar