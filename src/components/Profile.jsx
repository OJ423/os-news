import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "./context/LoginContext";
import ArticleListItem from "./ArticleListItem";

export default function Profile({articlesList}){
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const navigate = useNavigate()
  
  function handleLogout() {
    setUserLogin([])
    navigate('/login')
  }

  return( <>
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
    <h2>Here are your published articles</h2>
    {articlesList.map((article) => (
      article.author === userLogin[0].username ?
        <ArticleListItem key={article.article_id} article={article} />
        : null
      ))}
      </>
      : 
      <>
      <p>Woah! How did you get here? This page is for logged in users only</p>
      <button onClick={(() => {navigate('/login')})}>Login Here</button>
      </>
      }
    </>
  )

}