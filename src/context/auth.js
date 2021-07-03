import { createContext, useReducer } from "react";

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    login: () => {}
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
    const [state, dispatch] = useReducer(AuthReducer, {user: null})
    
    const login = (userData) => {
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider value={{user: state.user, login, logout}} {...props} />
    )
}

export { AuthContext, AuthProvider}