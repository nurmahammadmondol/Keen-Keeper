import { Suspense } from "react";
import Banner from "./Banner/Banner";
import Friends from "./Friends/Friends";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<h1>Looooooding ..............</h1>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </div>
  );
};

export default Home;
