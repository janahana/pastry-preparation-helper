import { useState } from "react";
import "./PastryNote.css";

const PastryNote = (props) => {
  const [isCheckedForIngredients, setIsCheckedForIngredients] = useState("red");
  const [isCheckedForSeparators, setIsCheckedForSeparators] = useState("red");
  const [isCheckedForWeights, setIsCheckedForWeights] = useState("red");

  const [checkedIngredientsSymbol, setCheckedIngredientsSymbol] =
    useState("✔️");
  const [checkedSeparatorsSymbol, setCheckedSeparatorsSymbol] = useState("✔️");
  const [checkedWeightsSymbol, setCheckedWeightsSymbol] = useState("✔️");

  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const [enteredIngredients, setEnteredIngredients] = useState("");

  const ingredientsChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredIngredients(event.target.value);

    if (
      event.target.value !== "" &&
      event.target.value.match(/[\u3400-\u9FBF]/) &&
      event.target.value.match(/[0-9]/) &&
      event.target.value.includes(" ")
    ) {
      setIsCheckedForIngredients("green");
      setCheckedIngredientsSymbol("😍");
      console.log("Ingredient check: true");
    } else {
      setIsCheckedForIngredients("red");
      setCheckedIngredientsSymbol("✔️");
    }

    if (event.target.value.includes("、")) {
      setIsCheckedForSeparators("green");
      setCheckedSeparatorsSymbol("😍");
      console.log("Separator check: true");
    } else {
      setIsCheckedForSeparators("red");
      setCheckedSeparatorsSymbol("✔️");
    }

    if (event.target.value.includes(" ")) {
      setIsCheckedForWeights("green");
      setCheckedWeightsSymbol("😍");
      console.log("Weight check: true");
    } else {
      setIsCheckedForWeights("red");
      setCheckedWeightsSymbol("✔️");
    }
  };

  const [enteredRecipeLink, setEnteredRecipeLink] = useState("");

  const recipeLinkChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredRecipeLink(event.target.value);
  };

  const [enteredHomemadePastryPhoto, setEnteredHomemadePastryPhoto] =
    useState("");

  const homemadePastryPhotoChangeHandler = (event) => {
    console.log(
      event.target.value
    ); /* event.target.files[0].name not working */
    setEnteredHomemadePastryPhoto(event.target.value);
  };

  const [enteredHearted, setEnteredHearted] = useState(false); /* bug */

  const heartedChangeHandler = (event) => {
    console.log(event.target.checked);
    setEnteredHearted(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // const enteredIngredients = enteredIngredients
    //   .split("、")
    //   .map((ingredient) => ingredient.split(" "));
    // msg: 'enteredIngredients' was used before it was defined

    const currentTime = new Date();

    const pastryEntry = {
      name: enteredName,
      ingredients: enteredIngredients
        .split("、")
        .map((ingredient) => ingredient.split(" ")),
      recipe_link: enteredRecipeLink,
      homemade_pastry_photo: enteredHomemadePastryPhoto,
      hearted: enteredHearted,
      log_time: currentTime
    };

    props.onSavePastryEntry(pastryEntry);

    setEnteredName("");
    setEnteredIngredients("");
    setEnteredRecipeLink("");
    setEnteredHomemadePastryPhoto(""); /* bug */
    setEnteredHearted(false); /* bug */
  };
  return (
    <div className="submit-form">
      <form onSubmit={submitHandler}>
        <div>
          <label for="name">
            <span>甜點名：</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="馬卡龍"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div>
          <label for="ingredients">
            <span>材料：</span>
          </label>

          <input
            id="ingredients"
            type="text"
            value={enteredIngredients}
            placeholder="麵粉 1公斤、低筋麵粉 3g"
            onChange={ingredientsChangeHandler}
          ></input>
        </div>

        <div className="check-ingredients"></div>
        <p
          className="checked-ingredients"
          style={{
            color: isCheckedForIngredients
          }}
          onCheck={ingredientsChangeHandler}
        >
          {checkedIngredientsSymbol} 半形空格（ ）：材料品項
        </p>
        <p
          className="checked-separators"
          style={{
            color: isCheckedForSeparators
          }}
          onCheck={ingredientsChangeHandler}
        >
          {checkedSeparatorsSymbol} 頓號（、）：分隔材料品項
        </p>
        <p
          className="checked-weights"
          style={{
            color: isCheckedForWeights
          }}
          onCheck={ingredientsChangeHandler}
        >
          {checkedWeightsSymbol} 半形數字：品項測重
        </p>

        <div>
          <label for="recipe_link">
            <span>參考食譜網址：</span>
          </label>
          <input
            id="recipe_link"
            type="url"
            value={enteredRecipeLink}
            placeholder="https://www.youtube.com/watch?v=MgphHyGgeQU"
            onChange={recipeLinkChangeHandler}
          ></input>
        </div>

        <div>
          <label for="homemade_pastry_photo">
            <span>上傳甜點成品照：</span>
          </label>
          <input
            id="homemade_pastry_photo"
            type="file"
            accept="image/png, image/jpg"
            value={enteredHomemadePastryPhoto}
            onChange={homemadePastryPhotoChangeHandler}
          ></input>
        </div>

        <div>
          <label for="hearted">
            <span>加入我的收藏：</span>
          </label>
          <input
            id="hearted"
            type="checkbox"
            value={enteredHearted}
            onChange={heartedChangeHandler}
          ></input>
        </div>
        <div>
          <button className="btn-cancel" type="button" onClick={props.onCancel}>
            取消
          </button>
          <button className="btn-submit" type="submit">
            送出
          </button>
        </div>
      </form>
    </div>
  );
};

export default PastryNote;
