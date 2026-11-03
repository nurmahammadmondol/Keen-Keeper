import { use } from "react";
import Friend from "./Friend";

const Friends = ({friendsPromise}) => {

    const friends=use(friendsPromise)
    // console.log(friends)

    return (
        <div className="my-20 pt-5 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-5">Your Friends</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
            
        </div>
    );
};

export default Friends;