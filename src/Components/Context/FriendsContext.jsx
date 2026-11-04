import { createContext } from "react";

export const DataContext = createContext(null);

const FriendsContext = ({ children }) => {

//    const []

    const handleQuickCheckIn=(id, type)=>{
        console.log(id, type)
    }

    return (
        <DataContext.Provider value={{handleQuickCheckIn}}>
            {children}
        </DataContext.Provider>
    );
};

export default FriendsContext;