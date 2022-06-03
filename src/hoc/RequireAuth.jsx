import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate,useLocation,useNavigate } from 'react-router-dom'
export const RequireAuth = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    const {pathname} = useLocation();
    if(isAuth){
        return children;
    }
    else{
        return <Navigate to="/login" state={{from:pathname}} replace />;
    }

  
}
