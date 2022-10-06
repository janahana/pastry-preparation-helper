import "./PastryList.css";
import Pastry from "./Pastry";

const PastryList = (props) => {
  return (
    <ul>
      {props.items.map((pastry) => {
        return (
          <Pastry
            name={pastry.name}
            ingredients={pastry.ingredients}
            recipe_link={pastry.recipe_link}
            homemade_pastry_photo={pastry.homemade_pastry_photo}
            hearted={pastry.hearted}
            log_time={pastry.log_time}
          />
        );
      })}
    </ul>
  );
};

export default PastryList;
