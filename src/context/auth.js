import { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode"

const initialState = {
    user: null
}

if(localStorage.getItem("jwt")){
    const DecodedToken = jwtDecode(localStorage.getItem("jwt"));
    if(DecodedToken.exp*1000 < Date.now()){
        localStorage.removeItem('jwt');
    } else {
        initialState.user = DecodedToken;
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
})

function AuthReducer(state, action){
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

function AuthProvider(props){
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    
    const login = (userData) => {
        localStorage.setItem("jwt",userData.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }
    
    const logout = () => {
        localStorage.removeItem("jwt")
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider value={{user: state.user, login, logout}} {...props} />
    )
}

export { AuthContext, AuthProvider}
