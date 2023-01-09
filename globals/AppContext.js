import {createContext, useState } from 'react';
import { authentication } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AppContext = createContext();

function AppProvider ({children}){
    const [email,setEmail] = useState('');
    const [uid,setUid] = useState (null)
    const [fullName, setFullName] = useState('');

    return (
        <AppContext.Provider value={{email,setEmail,fullName,setFullName,uid,setUid}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}