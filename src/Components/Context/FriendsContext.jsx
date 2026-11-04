import { createContext, useState } from "react";

export const DataContext = createContext(null);

const FriendsContext = ({ children }) => {

   const [checkIn, setCheckIn]=useState([])

    const handleQuickCheckIn=(data)=>{
        setCheckIn([...checkIn, data])
        console.log(checkIn)
    }

    return (
        <DataContext.Provider value={{handleQuickCheckIn, checkIn, setCheckIn}}>
            {children}
        </DataContext.Provider>
    );
};

export default FriendsContext;