import React from "react";

export const Movie = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-3 ">
      <div className="col-span-6 p-3 rounded-xl transition-all overflow-hidden w-full">
        <img
          src="https://alokiddy.com.vn/Uploads/images/hoc-tieng-anh-qua-phim-hoat-hinh-doremon.jpg"
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
      <div className="col-span-6 p-3 rounded-xl transition-all  overflow-hidden">
        <img
          src="https://media.viez.vn/prod/2022/7/11/large_conan_7_7bda3f7807.jpeg"
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
    </div>
  );
};
