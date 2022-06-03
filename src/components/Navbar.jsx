import React,{useContext} from 'react'
import {Link,useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { Post } from '../Pages/Post'
export const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleloginclick = ()=>{
    if(!isAuth) navigate("/login");
    else{
      logout();
      // navigate("/")
    }
  }
  
  return (
    
    <div style={{display:"flex",padding:"10px"}}>Navbar :
      <Link to="">Home</Link>
      {/* the simplest way of acheving this instead of reuire auth  */}
      {/* {isAuth&&<Link to="/posts">Post</Link>} */}
      {/* {isAuth&&<Link to="/feeds">Feeds</Link>} */}
      <Link to="/posts">Post</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/carriers">Carrier</Link>
      <button onClick={handleloginclick}>{isAuth ? "Logout":"Login"}</button>
    </div>
  )
}

// the issue is that when we click to post or carrier page it take me to feed page only so we need uselocation;
// because in actual website there are a lot of pages to work on