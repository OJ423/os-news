import { useState, useContext, useEffect } from "react";
import LoginContext from "./context/LoginContext";
import { fetchUsers } from "./utils";

export default function Login() {
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const [usernameInput, setUsernameInput] = useState([])
  const [users, setUsers] = useState([]);
  const [validUser, setValidUser] = useState(true)
  const [err, setErr] = useState(true)

  useEffect(() => {
    fetchUsers()
    .then((responseUsers) => {
      setUsers(responseUsers)
    })
    .catch((err) => {
      setErr("Something went wrong fetching the data. Please refresh and try again.")
    })
  },[])

  function handleUsernameInput(event){
    setUsernameInput(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const filteredUsers = users.filter(user =>{
      return user.username === usernameInput
    })
      if(filteredUsers.length === 1)  {
        setValidUser(true)
        setUsernameInput([])
        setUserLogin(filteredUsers)
      }
      else {
        setValidUser(false)      
      }
  }


  return (
      <>
      {userLogin.length ? <p> Welcome {userLogin[0].username}<br/> Now go and explore</p>:
        <section className="login-container">
          <h1>Login to OS News</h1>
          <p>By logging in you can add comments, topics and articles. Fill in the form below to get started.</p>
          <form onSubmit={handleSubmit}>
            <p className="note">Note: Login with any of these usernames: tickle122, grumpy19, happyamy2016, cooljmessy, weegembump and jessjelly</p>
            <label htmlFor="user-name">Username:</label>
            <input id="user-name" type="text" value={usernameInput} onChange={handleUsernameInput}/>
            <button className="button" >Login</button>
            {validUser ? null: <p>Invalid username</p>}
          </form>
        </section>
          }
      </>
  )

}