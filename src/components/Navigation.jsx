import { useContext } from "react"
import { NavLink } from "react-router-dom"
import LoginContext from "./context/LoginContext"

export default function Navigation(){
  const {userLogin, setUserLogin} = useContext(LoginContext)
  return( 
    <ul className="navigation-bar">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/articles">Articles</NavLink></li>
      <li><NavLink to="/topics">Topics</NavLink></li>
    {userLogin.length ?
      <li><NavLink to="/profile">Profile</NavLink></li> :
      <li><NavLink to="/login">Login</NavLink></li>
    }
    </ul>
  )
}