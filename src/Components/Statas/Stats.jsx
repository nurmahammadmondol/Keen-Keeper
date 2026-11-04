import FriendshipAnalytics from "./FriendshipAnalytics";

const Stats = () => {
  const interactions = [
    { friend: "Rafi", type: "Text" },
    { friend: "Rafi", type: "Call" },
    { friend: "Nabila", type: "Video" },
    { friend: "Sakib", type: "Call" },
    { friend: "Tania", type: "Text" },
  ];

  return (
    <div>
    
      <FriendshipAnalytics interactions={interactions}></FriendshipAnalytics>
    </div>
  );
};

export default Stats;
