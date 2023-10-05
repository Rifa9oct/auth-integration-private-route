import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //observe on state change
    useEffect(()=>{
        const unSubsCribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubsCribe();
        }
    },[])

    const logOut = ()=>{
        return signOut(auth);
    }

    const authInfo = {user, createUser, signinUser, logOut,loading}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;
