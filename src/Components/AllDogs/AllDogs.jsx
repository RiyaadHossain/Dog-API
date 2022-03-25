import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import Liked from "../Liked/Liked";
import "./AllDogs.css";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [like, setLike] = useState([])
  const youLiked = (dog) => {
    const newLike = [...like, dog]
    setLike(newLike)
  }
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);
  return (
    <div className="main-container">
      <div className="dog-container">
        {dogs.map((dog) => <Dog youLiked={youLiked} key={dog.id} dog={dog} /> )}
      </div>
      <div className="liked-dog">
        <Liked like={like}/>
      </div>
    </div>
  );
};

export default AllDogs;
