import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext(null);

const FriendsContext = ({ children }) => {
  const [checkIn, setCheckIn] = useState([]);

  const handleQuickCheckIn = (data, type) => {
    const timestamp = new Date().toISOString();
    const addData = { ...data, type, callDate: timestamp };

    const alreadyExists = checkIn.find(
      (single) => single.id === addData.id && single.type === addData.type,
    );

    if (alreadyExists) {
      toast.error(`${type} with ${data.name} is already added!`);
      return;
    }

    setCheckIn([...checkIn, addData]);
    toast.success(`${type} with ${data.name} added to timeline!`, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
  };

  return (
    <DataContext.Provider value={{ handleQuickCheckIn, checkIn, setCheckIn }}>
      {children}
    </DataContext.Provider>
  );
};

export default FriendsContext;
