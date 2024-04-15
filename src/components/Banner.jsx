import React from "react";
import logo from '../assets/logo.jpg'
export const Banner = () => {
  return (
    <div className="relative w-full">
      <img src={logo} alt="photo" className="w-full h-[420px] object-cover rounded-2xl" />
      <div className="absolute left-0 right-0 bottom-0 mx-auto  w-[80%] h-[65%] flex flex-col gap-3 overflow-y-hidden">
        <div className="flex mx-auto justify-center items-center">
          <div className="flex felx-col gap-20 items-center text-d-text text-5xl font-semibold">
            <h1 className="font-serif text-center ">Explore the cinema's<br/>
                <span className="text-[#1ab049]">captivating</span> world and <span className="text-[#1ab049]"> enchanting</span> magic
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
