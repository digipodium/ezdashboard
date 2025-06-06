import React, { createContext, useState, ReactNode } from "react";
import { AppDashboardInterface } from "../types/ContextTypes";

// Define a type for your user object if AppDashboardInterface doesn't fully cover it
// For example:
// interface User {
//   id: string;
//   name: string;
//   email: string;
//   // ... other user properties
// }

// Initial value for the context. This helps TypeScript understand the default shape.
// It's good practice to provide a default that matches the interface, even if it's "null" or empty functions.
const DashboardContext = createContext<AppDashboardInterface>({
    user: null, // Initial user state
    setUser: () => { /* no-op */ }, // Placeholder function
    loggedIn: false, // Initial loggedIn state
    setLoggedIn: () => { /* no-op */ }, // Placeholder function
    logout: () => { /* no-op */ }, // Placeholder function
    authenticate: () => { /* no-op */ } // Placeholder function
});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {

    // Safely parse currentUser from sessionStorage.
    // Provide a default value for useState if JSON.parse fails or returns empty.
    const [currentUser, setCurrentUser] = useState<AppDashboardInterface['user']>(() => {
        try {
            const storedUser = sessionStorage.getItem('currentUser');
            // Ensure that an empty string doesn't get parsed as a valid object/value.
            // If storedUser is null or empty, return null. Otherwise, try parsing.
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Failed to parse currentUser from sessionStorage", error);
            return null; // Return null on error
        }
    });

    // Determine loggedIn status based on currentUser
    const [loggedIn, setLoggedIn] = useState<boolean>(!!currentUser); // Convert currentUser to boolean

    const logout = () => {
        sessionStorage.removeItem('currentUser');
        setCurrentUser(null); // Set to null, not empty string, if user is null
        setLoggedIn(false);
    }

    const authenticate = (user: AppDashboardInterface['user']) => {
        // When authenticating, store the user data in sessionStorage
        if (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            setCurrentUser(user);
            setLoggedIn(true);
        } else {
            console.warn("Attempted to authenticate with a null user.");
            logout(); // Or handle error appropriately
        }
    }

    // Pass the actual state variables and functions to the context provider
    return (
        <DashboardContext.Provider value={{
            user: currentUser, // Map currentUser to 'user' as defined in AppDashboardInterface
            setUser: setCurrentUser, // Map setCurrentUser to 'setUser'
            loggedIn,
            setLoggedIn,
            logout,
            authenticate
        }}>
            {children}
        </DashboardContext.Provider>
    );
}

export default DashboardContext;