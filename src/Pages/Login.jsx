import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
export const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const [logincreds,setLogincreds] = React.useState({});
    const handlechange = (e)=>{
        const {name,value} = e.target;
        setLogincreds({
            ...logincreds,[name]:value
        })
    };
    const handlesubmit = (e)=>{
        e.preventDefault();
        login();
        // navigate("/feeds")
        //use navigate here and navbar or directly use in authcontext
        
        

    }
    


  return (
    <div>Login
        <form onSubmit={handlesubmit} style={{display:"flex",flexDirection:"column",maxWidth:"200px",margin:"auto",gap:"10px"}}>
            <input name="email" type="email" onChange={handlechange} />
            <input name='password' type="password" onChange={handlechange}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
