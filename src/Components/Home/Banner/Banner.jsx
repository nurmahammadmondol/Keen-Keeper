import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div className=" text-center space-y-3 md:space-y-5">
        <h2 className="text-3xl md:text-5xl font-bold">
          Friends to Keep close in your life
        </h2>
        <p className="text-xs text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea
          ducimus animi quasi eveniet <br /> laudantium reprehenderit explicabo
          blanditiis eos consequuntur.
        </p>
        <button className="btn bg-[#244D3F] text-white">
          <Plus /> Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {/* 1st cart  */}
        <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl">
          <p className="text-[#244D3F] text-3xl font-bold">10</p>
          <h6 className="text-gray-400 ">Total Friends</h6>
        </div>
        {/* 2nd cart  */}
        <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl">
          <p className="text-[#244D3F] text-3xl font-bold">3</p>
          <h6 className="text-gray-400 ">On Track</h6>
        </div>
        {/* 1st cart  */}
        <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl">
          <p className="text-[#244D3F] text-3xl font-bold">6</p>
          <h6 className="text-gray-400 ">Need Attention</h6>
        </div>
        {/* 1st cart  */}
        <div className="text-center p-4 md:p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl">
          <p className="text-[#244D3F] text-3xl font-bold">12</p>
          <h6 className="text-gray-400 ">Interactions This Month</h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
