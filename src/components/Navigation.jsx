import { Link } from "react-router-dom"

export default function Navigation(){
  return( 
    <ul className="navigation-bar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/articles">Articles</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )
}