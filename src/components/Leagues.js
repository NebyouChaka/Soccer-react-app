import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (e) => {
    // 👇️ refers to the image element
    console.log(e.target);

    console.log("Image clicked");
  };

  return (
    <div className="leagues-container ">
      {data?.map((league) => (
        <div key={league.id} className="league-div">
          <img src={league.logos.light} alt="#" onClick={handleClick} />
          <h4>{league.name}</h4>
          
        </div>
      ))}
    </div>
  );
};

export default Leagues;
