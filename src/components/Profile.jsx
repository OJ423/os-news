import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "./context/LoginContext";
import ArticleListItem from "./ArticleListItem";

export default function Profile({articlesList}){
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const navigate = useNavigate()
  
  function handleLogout() {
    setUserLogin([])
    navigate('/login')
  }

  return( 
    <main className="profile-page-container">
    {userLogin.length ?
    <>
    <h1>Profile for {userLogin[0].username}</h1>
    <section className="profile-container">
      <img src={userLogin[0].avatar_url} alt={`Avatar for ${userLogin[0].username}`} />
      <article className="profile-detail">
        <h3>Username: {userLogin[0].username}</h3>
        <p>Name: {userLogin[0].name}</p>
        <button onClick={handleLogout}>Logout</button>
      </article>
    </section>
    <h2>Publish Your Latest Thoughts</h2>
    <Link to="/articles/new"><button>Publish a new article</button></Link>
    <h2>Here are your published articles</h2>
    <div className="articles-two-grid">
    {articlesList.map((article) => (
      article.author === userLogin[0].username ?
        <ArticleListItem key={article.article_id} article={article} />
        : null
      ))}
      </div>
      </>
      : 
      <>
      <p>Woah! How did you get here? This page is for logged in users only</p>
      <button onClick={(() => {navigate('/login')})}>Login Here</button>
      </>
      }
      </main>
  )

}