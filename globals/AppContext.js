import {createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider ({children}){
    const [email,setEmail] = useState('james@gmail.com');
    const [fullName, setFullName] = useState('James Elvis');

    return (
        <AppContext.Provider value={{email,setEmail,fullName,setFullName}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}