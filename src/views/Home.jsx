import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Banner } from "../components/Banner";
import { Title } from "../components/Title";
import { Movie } from "../components/Movie";
import { Mail } from "../components/Mail";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";

export const Home = () => {
  const [activeTheme, setTheme] = useTheme();
  return (
    <div className=" h-full dark:bg-dark relative">
      <div className="relative flex mx-auto mt-[65px] py-4  items-center w-[98%] rounded-2xl overflow-hidden">
        <Banner />
      </div>
      <div className="absolute top-[17%] left-[28%] z-10">
          <Search />
      </div>
      <div className="flex w-[80%] flex-wrap mx-auto justify-center h-full">
        <div className="flex flex-col w-full gap-2">
          <Title
            title="Cinema Specials"
            dess="Promotions, discounts and special offers at the cinema"
          />
          <div className="flex w-full justify-center items-center gap-5 px-5 my-2">
            <div className="flex w-[50%] justify-between items-center p-2">
              <div className="flex flex-col items-start gap-3">
                <h2 className="font-bold text-lg dark:text-d-text">
                  Enjoy an extended cinematic experience yet!
                </h2>
                <p className="text-p-text text-md dark:text-d-text">
                  Please book your tickets to enjoy an exciting movie screening together!
                </p>
                <button className="py-2 px-5 rounded-lg bg-dark text-d-text dark:bg-d-card transition-all hover:translate-y-[-5px] hover:bg-light border hover:border-dark hover:text-d-text ">
                  Find movie
                </button>
              </div>
              <img
                src="https://cdn.moveek.com/storage/media/cache/large/5c19ba23c81a3744549271.jpg"
                alt=""
                className="w-[124px] h-[124px] object-cover rounded-lg"
              />
            </div>
            <div className="flex w-[50%] justify-between items-center p-2">
              <div className="relative w-full">
                <img
                  src="https://i.pinimg.com/originals/05/d4/cb/05d4cbc50b0e3d2e86b1d2730dd41a68.jpg"
                  alt=""
                  className="w-full h-[156px] rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 w-full bg-dark"></div>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          <Title
            title="Trending movie"
            dess=""
          />
          <Movie />
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};
