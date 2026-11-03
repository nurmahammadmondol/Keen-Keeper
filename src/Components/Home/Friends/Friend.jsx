// import { useContext } from "react";
// import { DataContext } from "../../Context/FriendsContext";

import { Link } from "react-router";

const Friend = ({ friend }) => {
  //   const { handleDetails } = useContext(DataContext);

  const { id,name, picture, status, days_since_contact, tags } = friend;

  return (
    <Link to={`/details/${id}`}>
      <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl space-y-3">
        <img
          className="w-20 rounded-full mx-auto"
          src={picture}
          alt="picture"
        />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-400 my-1">{days_since_contact}d ago</p>

        <div className="flex justify-center items-center gap-2">
          {tags.map((tag, i) => (
            <small
              className="px-2 bg-[#CBFADB] text-green-600 rounded-full"
              key={i}
            >
              {tag}
            </small>
          ))}
        </div>

        <small
          className={`px-3 py-1 text-white rounded-full text-center ${status === "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"} ${status === "overdue" ? "bg-[#EF4444]" : "bg-[#244D3F]"} `}
        >
          {status}
        </small>
      </div>
    </Link>
  );
};

export default Friend;
