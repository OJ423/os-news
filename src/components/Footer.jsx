import { Link } from "react-router-dom"

export default function() {
  return(
    <footer>
      <div className="logo">OS NEWS</div>
        <Link to={'/login'}><button>Login</button></Link>
    </footer>
  )
}