import React,{createContext,useRef,useReducer,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const [isAuth,setIsAuth] = useState(false);
    const {state} =useLocation();
    const login = ()=>{
        setIsAuth(true);
        if(state.from){
            navigate(state.from,{replace:true})
        }
        else{
            navigate("/")
        }
        // navigate("/feeds")
    }
    const logout = ()=>{
        setIsAuth(false);
        navigate("/")
    }
    return(
        <AuthContext.Provider value={{ isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
