import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";


export const Home = () => {
  const [activeTheme, setTheme] = useTheme();
  return (
    <div className=" h-full dark:bg-dark relative">
      
      <div className="relative flex mx-auto mt-[65px] py-0  items-center w-[98%] rounded-2xl overflow-hidden">
        <Banner />
      </div>
      
      <Footer /> 
    </div>
  );
};
