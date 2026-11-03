import { createContext } from "react";

export const DataContext = createContext(null);

const FriendsContext = ({ children }) => {

   

    const handleDetails=(id)=>{
        console.log('aaaaaaaaaaaaaaaaaaaaaa',id)
    }

    return (
        <DataContext.Provider value={{handleDetails}}>
            {children}
        </DataContext.Provider>
    );
};

export default FriendsContext;