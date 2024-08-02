import React from "react";
import { createContext, useState } from "react";
import { AppDashboardInterface } from "../types/ContextTypes";

const DashboardContext = createContext<AppDashboardInterface>({
    user: null,
    setUser: () => { },

});

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser') ?? ''));
    const [loggedIn, setLoggedIn] = useState(currentUser !== '');


    const logout = () => {
        sessionStorage.removeItem('currentUser');
        setCurrentUser('');
        setLoggedIn(false);
    }

    const authenticate = () => {
        setLoggedIn(true);
    }

    return (
        <DashboardContext.Provider value={{ user, setUser }}>
            {children}
        </DashboardContext.Provider>
    );
}

export default DashboardContext;
