import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import LoginContext from "./context/LoginContext"
import { IoClose, IoMenu } from "react-icons/io5";
import '../Navbar.css'


export default function Navigation(){
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const [showNav, setShowNav] = useState(false)

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };
  return(
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          OS NEWS
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <IoMenu />
        </div>
        <div className={`nav-elements  ${showNav && "active"}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/topics">Topics</NavLink></li>
          {userLogin.length ?
            <li><NavLink to="/profile">Profile</NavLink></li> :
            <li><NavLink to="/login">Login</NavLink></li>
          }
          </ul>
        </div>
      </div>
    </nav>
  )
}