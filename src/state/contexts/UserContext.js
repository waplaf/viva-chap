'use client'
import  { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../Reducers/UserReducer';

export const UserContext = createContext();

export default  function Context  ({children}){
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}