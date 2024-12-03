import React, { createContext, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import {  createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const info = {
        user,
        setUser,
        createUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;