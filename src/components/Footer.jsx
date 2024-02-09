import { Link } from "react-router-dom"

export default function() {
  return(
    <footer>
      <div className="logo">OS NEWS</div>
      <div className="footer-links">
        <Link to='/articles'><p>Articles</p></Link>
        <Link to='/topics'><p>Topics</p></Link>
        <p>Login to post comments and artilcles</p>
        <Link to={'/login'}>Login</Link>
      </div>
      <div className="footer-rights">OS NEWS © 2024</div>
    </footer>
  )
}