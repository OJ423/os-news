import { useState, useContext } from "react";
import LoginContext from "./context/LoginContext";

export default function Login({users}) {
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const [usernameInput, setUsernameInput] = useState([])
  const [validUser, setValidUser] = useState(true)

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
          <form onSubmit={handleSubmit}>
              <p className="note">Note: Login with any of these usernames: tickle122, grumpy19, happyamy2016, cooljmessy, weegembump and jessjelly</p>
              <label htmlFor="user-name">Username:</label>
              <input id="user-name" type="text" value={usernameInput} onChange={handleUsernameInput}/>
              <button className="button" >Login</button>
              {validUser ? null: <p>Invalid username</p>}
          </form>
          }
      </>
  )

}