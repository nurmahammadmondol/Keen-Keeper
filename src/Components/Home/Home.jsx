import { Suspense } from "react";
import Banner from "./Banner/Banner";
import Friends from "./Friends/Friends";

const friendsPromise = fetch("/friends.json").then((res) => res.json());
// console.log(friendsPromise)

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<h1 className="text-center my-20"><span className="loading loading-bars loading-xl"></span></h1>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </div>
  );
};

export default Home;
