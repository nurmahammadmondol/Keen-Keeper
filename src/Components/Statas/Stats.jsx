import { useContext } from "react";
import FriendshipAnalytics from "./FriendshipAnalytics";
import { DataContext } from "../Context/FriendsContext";

const Stats = () => {
  const {checkIn}=useContext(DataContext)
  

  return (
    <div>
    
      <FriendshipAnalytics interactions={checkIn}></FriendshipAnalytics>
    </div>
  );
};

export default Stats;
