import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { SearchFeed } from "../components/SearchFee";
import { useFetch } from "../hooks/useFetch";
import './List.css'
export const List = () => {
  const location = useLocation();
  const [ movie, setMovie] = useState(location.state.movie);
  
  const [date, setDate] = useState(location.state.date);
  const handleDateChange = (date) => {
    setDate(date); 
  };

  const { data, loading, error, reFetch } = useFetch(`/lists?movie=${movie}`
  );
  console.log(data);
  const handleClick = () => {
    reFetch();
  };
  return (
    <div className="listContainer mt-20">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Movie</label>
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
        <div className="listResult">
         {data &&  loading ? (
            "loading"
          ) : (
            <>
              {data.map((item) => (
                <SearchFeed item={item} key={item._id} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
