import React, { useEffect, useState } from "react";
import { addToDB } from "../../Database/Database";
import Dog from "../Dog/Dog";
import Liked from "../Liked/Liked";
import "./AllDogs.css";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [like, setLike] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  useEffect(() => {
    // const dataBase = getDB()
  }, []);

  const youLiked = (dog) => {
    const newLike = [...like, dog];
    let uniqueLike = [];
    // eslint-disable-next-line array-callback-return
    newLike.map((like) => {
      if (uniqueLike.indexOf(like) === -1) {
        uniqueLike.push(like);

        addToDB(dog.name);
      } else {
        alert("Sorry, You can't Add the Same Dog Twice ⛔");
      }
      // uniqueLike.indexOf(like) === -1 ? uniqueLike.push(like) : alert("Sorry, You can't Add the Same Dog Twice ⛔")
    });
    setLike(uniqueLike);
  };
  return (
    <div className="main-container">
      <div className="dog-container">
        {dogs.map((dog) => (
          <Dog youLiked={youLiked} key={dog.id} dog={dog} />
        ))}
      </div>
      <div className="liked-dog">
        <Liked like={like} />
      </div>
    </div>
  );
};

export default AllDogs;
