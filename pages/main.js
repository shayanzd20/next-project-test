import React,{createContext, useState} from "react";
import Tab from './tab';
import Login from './login';
import Dashboard from './dashboard';

export const profileContext = createContext({username: null, name: null, family: null})

const Main = ({ name }) => {
    let [profile,setProfile] = useState({username: null, name: null, family: null})

    return <profileContext.Provider value={{profile,setProfile}}>
         <div style={{ textAlign: "center" }}>
             <Tab className="border: 2px solid"/>
            <Login />
         </div>
    </profileContext.Provider>
}


export default Main