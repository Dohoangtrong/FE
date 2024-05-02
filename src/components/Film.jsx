import React from "react";
import { Link } from "react-router-dom";
import './Film.css'
export const Film = ({item, style}) => {
  const categories = item.category.join(', ');

  return (
    <div className="searchItem" style={style}>
      <img src={item.img} alt="" className="siImg" />
      <div className="siDesc">
        <a href="https://betacinemas.vn/home.htm">
          <h1 className="siTitle">{item.name}</h1>
        </a>
        <h1 className="siDescription">Duration: {item.duration} minutes</h1>
        <h1 className="siDescription">Category: {categories}</h1>
        <h1 className="siDescription">Release Date: {item.date}</h1>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts hover:translate-y-[-3px]">
          <Link to={"/lists"}>
            <button className="siCheckButton">Purchase tickets</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
