import React from "react";
import { Footer } from "../components/Footer";
import { Film } from "../components/Film";
import { useFetch } from "../hooks/useFetch";
import './Movie.css'
export const Movie = () => {
  const { data, loading, error, reFetch } = useFetch(`/film/getFilm1`);
  return (
    <div className="dark:bg-dark movieContainer">
      <div className="dark:text-d-text movieTitle">
        <label>Recommendation</label>
      </div>
      <div className="dark:text-d-text movieResult">
        {data &&  loading ? (
          "loading"
        ) : (
          <>
            {data && data.length > 0 ? (
              data.map((item) => (
                <Film item={item} key={item._id} style={{margin: "0 53px 50px 53px"}}/>
              ))
            ) : (
              <div className="notification1">Movie not found</div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
