import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            const userEmail = currentUser?.email || user.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            if(currentUser){
                
                axios.post( 'http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token', res.data);
                })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () =>{
            return unsubscribe();
        }
    } ,[])

    const userInfo = {
        user,
        createUser,
        loading,
        signIn,
        logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;