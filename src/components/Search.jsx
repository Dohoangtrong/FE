import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {SearchContext} from '../context/SearchContext'
import './Search.css'
import { CalendarDays, Film, SearchIcon } from "lucide-react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { format } from "date-fns";


export const Search = () => {

  const [openDate, setOpenDate] = useState(false);
  const [movie, setMovie] = useState("");
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date); 
  };

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    console.log(movie + " " + date + " ")
    dispatch({ type: "NEW_SEARCH", payload: { movie, date } });
    navigate("/list", { state: { movie, date } });
  };
  return (
    <div className="grid grid-cols-8 gap-3 bg-light w-full my-2 py-3 px-5 rounded-3xl text-light">
      <div className="col-span-5 flex gap-2 items-center">
        <Film color="#757575" />
        <input
          type="text"
          placeholder="What movie are you looking for?"
          className="w-full py-2 outline-none"
          onChange={(e) => setMovie(e.target.value)}
        />
      </div>
      <div className="col-span-2 flex gap-2 items-center px-3">
        <CalendarDays color="#757575" />
        
        <span
          onClick={() => setOpenDate(!openDate)}
          className="text-p-text"
        >{`${format(date, "dd/MM/yyyy")}`}</span>
        {openDate && (
          <Calendar
            editableDateInputs={false}
            onChange={handleDateChange}
            value={date}
            className="top-20 right-[15%] absolute z-40"
          />
        )} 
      </div>
      <div className="flex mx-auto">
        <button className="flex mx-auto justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-d-card" onClick={handleSearch}>
          <SearchIcon color="#fff" />
        </button>
      </div>
    </div>
  );
};
