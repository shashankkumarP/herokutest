import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate,useNavigate } from 'react-router-dom'
export const Feed = () => {
  const navigate = useNavigate();
  const {isAuth} = useContext(AuthContext)
  if(isAuth){
    return (
      <div>Feed</div>
    )
  }
  else{
    // navigate("/login") //it work on double click
    //one more methoid is called navitgate component
   
    // return <Navigate to="/login"/>

    //one more methoid is make hoc and rap it inside it

  }
  
}
