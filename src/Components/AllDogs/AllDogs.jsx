import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import "./AllDogs.css";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);
  return (
    <div className="main-container">
      <div className="dog-container">
        {dogs.map((dog) => <Dog key={dog.id} dog={dog} /> )}
      </div>
      <div className="liked-dog"></div>
    </div>
  );
};

export default AllDogs;
