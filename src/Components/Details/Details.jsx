import { Link, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import {
  Archive,
  ArrowLeft,
  BellRing,
  MessageSquareMore,
  PhoneCall,
  Trash,
  Video,
} from "lucide-react";
import { DataContext } from "../Context/FriendsContext";

const Details = () => {
  const { id } = useParams();
  const { handleQuickCheckIn } = useContext(DataContext);

  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const findFriend = data.find((item) => item.id === Number(id));
        setFriend(findFriend);
        setLoading(false);
      });
  }, [id]);

  //   const { name, picture, status, days_since_contact, tags } = friend;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!friend) {
    return <h2>Friend Not Found!</h2>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {/* Profile  */}
        <div>
          <div className="text-center mb-5 p-4 md:p-8  bg-white border border-gray-100  space-y-3">
            <img
              className="w-32 rounded-full mx-auto"
              src={friend.picture}
              alt="picture"
            />
            <h3 className="text-xl font-bold">{friend.name}</h3>
            <p className="text-gray-400">{friend.email}</p>

            {/* <p className="text-gray-400 my-1">{friend.days_since_contact}d ago</p> */}

            <div className="flex justify-center items-center gap-2">
              {friend.tags.map((tag, i) => (
                <small
                  className="px-2 bg-[#CBFADB] text-green-600 rounded-full"
                  key={i}
                >
                  {tag}
                </small>
              ))}
            </div>
            <small className="text-gray-400">{friend.bio}</small>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn w-full bg-white font-bold text-[#244D3F]">
              <BellRing /> Snooze 2 Weeks
            </button>
            <button className="btn w-full bg-white font-bold text-[#244D3F]">
              <Archive /> Archive
            </button>
            <button className="btn w-full bg-white font-bold text-red-600">
              <Trash /> Delete
            </button>
          </div>
        </div>

        {/* Details  */}
        <div className="col-span-2 flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-100 rounded-xl">
              <p className="text-[#244D3F] text-3xl font-bold">
                {friend.days_since_contact}
              </p>
              <h6 className="text-gray-400 ">Days_Since_Contact</h6>
            </div>
            <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-100 rounded-xl">
              <p className="text-[#244D3F] text-3xl font-bold">{friend.goal}</p>
              <h6 className="text-gray-400 ">Goal (Days)</h6>
            </div>
            <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-100 rounded-xl">
              <p className="text-[#244D3F] text-3xl font-bold">
                {friend.next_due_date}
              </p>
              <h6 className="text-gray-400 ">Next Due</h6>
            </div>
          </div>
          <div className="p-4 md:p-8  bg-white border border-gray-100 rounded-xl">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl">Relationship Goal</h3>
                <small className="">
                  Connect every{" "}
                  <span className="font-bold">{friend.goal} days</span>
                </small>
              </div>
              <button className="btn">Edit</button>
            </div>
          </div>
          <div className="p-4 md:p-8  bg-white border border-gray-100 rounded-xl">
            <h3 className="text-xl">Quick Check In</h3>
            <div className="grid grid-cols-3 gap-5 mt-4">
              <button
                onClick={() =>
                  handleQuickCheckIn(friend, 'Call')
                }
                className="btn p-5 md:p-8"
              >
                <PhoneCall /> Call
              </button>
              <button
                onClick={() => handleQuickCheckIn(friend, 'Video')}
                className="btn p-5 md:p-8"
              >
                <Video /> Video
              </button>

              <button
                onClick={() => handleQuickCheckIn(friend, 'Text')}
                className="btn p-5 md:p-8"
              >
                <MessageSquareMore /> Text
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link className="btn mt-10 w-full" to="/">
        <ArrowLeft />
        Back
      </Link>
    </>
  );
};

export default Details;
