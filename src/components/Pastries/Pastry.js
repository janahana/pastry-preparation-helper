import { useState } from "react";
import Card from "../UI/Card";
import NoteDate from "./NoteDate";
import "./Pastry.css";

const Pastry = (props) => {
  const [hearted, setHearted] = useState(props.hearted);

  const clickHeartHandler = (event) => {
    event.preventDefault();
    alert("已收藏至我的最愛！");
    setHearted(true);
  };

  const heartWithCircle = (
    <div className="heart-circle" onClick={clickHeartHandler}>
      <div
        className={
          props.hearted === true
            ? "heart heart__fav_true"
            : "heart heart__fav_false"
        }
      ></div>
    </div>
  );

  const homemadePastryPhotoUrl = props.homemade_pastry_photo
    ? require("../../imgs/" + props.homemade_pastry_photo)
    : require("../../imgs/no_bake_cheese_cake.jpg");

  const homemadePastryPhoto = (
    // <img
    //   className="homemade-pastry"
    //   src={homemadePastryPhotoUrl}
    //   alt={props.name}
    // />
    <div
      className="homemade-pastry"
      style={{
        width: "200pt",
        background: homemadePastryPhotoUrl
      }}
    ></div>
  );

  const pastryName = <p className="pastry-name">{props.name}</p>;

  const pastryIngredients = props.ingredients.map((ingredient) => {
    return (
      <li className="pastry-ingredients">
        {ingredient[0]} {ingredient[1]}
      </li>
    );
  });

  const pastryRecipeLink = (
    <div className="content-container-overlay">
      <a className="pastry-recipe-link" href={props.recipe_link}>
        食譜參考來源
      </a>
    </div>
  );
  return (
    <Card className="card">
      <div className="date-container">
        <NoteDate date={props.log_time} />
      </div>
      <div className="photo-container">
        {heartWithCircle}
        {homemadePastryPhoto}
      </div>
      <div className="content-container">
        {pastryName}
        <ul>{pastryIngredients}</ul>
        {pastryRecipeLink}
      </div>
    </Card>
  );
};

export default Pastry;
