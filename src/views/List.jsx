import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { Film } from "../components/Film";
import { useFetch } from "../hooks/useFetch";
import './List.css'
export const List = () => {
  const location = useLocation();
  const [ movie, setMovie] = useState(location.state.movie);
  
  const [date, setDate] = useState(location.state.date);
  const handleDateChange = (date) => {
    setDate(date); 
  };

  const { data, loading, error, reFetch } = useFetch(`/film/getFilm?movie=${movie}`);
  const handleClick = () => {
    reFetch();
  };
  return (
    <div className="dark:bg-dark listContainer mt-10">
      <div className="listWrapper">
        <div className="listSearch">
          <div className="lsItem">
            <label></label>
            <input className="w-full py-2 px-3 outline-none" placeholder="What movie are you looking for?" type="text" />
          </div>
          <div className="lsItem">
            <label>Opening Date</label>
            <span>{`${format(date,"MM/dd/yyyy")}`}</span>
            <Calendar
              editableDateInputs={false}
              onChange={handleDateChange}
              value={date}
            />

          </div>
          <button onClick={handleClick}>Search</button>
        </div>
        <div className="dark:text-d-text listResult">
         {data &&  loading ? (
            "loading"
          ) : (
            <>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <Film item={item} key={item._id} style={{margin: "0 6px 50px 6px"}}/>
                ))
              ) : (
                <div className="notification">Movie not found</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
