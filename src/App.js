import { useState } from "react";
import NewPastry from "./components/NewPastry/NewPastry";
import PastryList from "./components/Pastries/PastryList";
import "./App.css";

const PASTRIES = [
  {
    id: "no_bake_cheese_cake",
    name: "生乳酪蛋糕",
    ingredients: [
      ["消化餅乾", "100g"],
      ["無鹽奶油", "40g"],
      ["吉利丁片", "6g"],
      ["動物性鮮奶油", "70g"],
      ["奶油乳酪", "200g"],
      ["砂糖", "50g"],
      ["原味優格", "130g"],
      ["檸檬汁", "30g"]
    ],
    recipe_link: "https://caroleasylife.blogspot.com/2015/09/blog-post_4.html",
    homemade_pastry_photo: "no_bake_cheese_cake.jpg",
    hearted: false,
    log_time: new Date()
  },
  {
    id: "chiffon_cake",
    name: "戚風蛋糕",
    ingredients: [
      ["蛋黃", "3個"],
      ["植物油", "35g"],
      ["低筋麵粉", "80g"],
      ["砂糖", "60g"],
      ["牛奶", "60g"],
      ["蛋白", "3個"],
      ["檸檬汁", "1/4小匙"]
    ],
    recipe_link: "https://icook.tw/recipes/262407",
    homemade_pastry_photo: "chiffon_cake.jpg",
    hearted: false,
    log_time: new Date()
  },
  {
    id: "pound_cake",
    name: "磅蛋糕",
    ingredients: [
      ["低筋麵粉", "100g"],
      ["砂糖", "100g"],
      ["全蛋", "2顆/100g"],
      ["無鹽奶油", "100g"],
      ["香草精", "1小匙"],
      ["無鋁泡打粉", "2/3小匙"]
    ],
    recipe_link: "https://dreamchefhome.com/自製磅蛋糕/",
    homemade_pastry_photo: "pound_cake.jpg",
    hearted: false,
    log_time: new Date()
  },
  {
    id: "madeleine",
    name: "瑪德蓮",
    ingredients: [
      ["低筋麵粉", "50g"],
      ["泡打粉", "1.5g"],
      ["無鹽奶油", "50g"],
      ["全蛋", "1顆"],
      ["低筋麵粉", "60g"]
    ],
    recipe_link: "https://www.barrelleaf.com/madeleines-by-pierre-herme/",
    homemade_pastry_photo: "madeleine.jpg",
    hearted: false,
    log_time: new Date()
  },
  {
    id: "scone",
    name: "司康",
    ingredients: [
      ["低筋麵粉", "210g"],
      ["泡打粉", "8g"],
      ["鹽", "一小撮"],
      ["砂糖", "50g"],
      ["無鹽奶油", "55g"],
      ["牛奶", "85g"],
      ["蛋", "半顆"]
    ],
    recipe_link:
      "https://www.youtube.com/watch?time_continue=757&v=HV5UFLep8UA&feature=emb_logo",
    homemade_pastry_photo: "scone.jpeg",
    hearted: false,
    log_time: new Date()
  },
  {
    id: "biscuits",
    name: "比司吉",
    ingredients: [
      ["低筋麵粉", "135g"],
      ["泡打粉", "1茶匙"],
      ["鹽", "4.3g"],
      ["砂糖", "3.7g"],
      ["無鹽奶油", "50g"],
      ["優格", "80ml"],
      ["水", "40ml"]
    ],
    recipe_link: "https://www.youtube.com/watch?v=sueTYY11o7g",
    homemade_pastry_photo: "scone.jpeg",
    hearted: true,
    log_time: new Date()
  }
];

function App() {
  const [pastries, setPastries] = useState(PASTRIES);
  //   interface between PastryNote and PastryList

  const addPastryNoteHandler = (pastryEntry) => {
    setPastries((prevPastryEntries) => {
      return [pastryEntry, ...prevPastryEntries];
    });
  };

  const homepageTitle = (
    <div className="title">
      <h1>
        動態烘焙材料篩選器
        <br />
        Dynamic Baking Preparation Helper
      </h1>
    </div>
  );

  const [isDisplayed, setIsDisplayed] = useState("none");

  const showDataHandler = () => {
    console.log(isDisplayed);
    setIsDisplayed("block");
  };

  const copyright = (
    <p className="copyright">
      Photo by{" "}
      <a href="https://unsplash.com/es/@heatherbarnes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Heather Barnes
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/baking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
      .
    </p>
  );
  return (
    <div>
      <header>
        {homepageTitle}
        {copyright}
      </header>
      <main>
        <NewPastry onAddPastry={addPastryNoteHandler} />
        <PastryList items={pastries} />
        <button className="json-data-display-btn" onClick={showDataHandler}>
          顯示原始 JSON 資料
        </button>
        <blockquote
          className="json-data-display-area"
          style={{ display: isDisplayed }}
        >
          {JSON.stringify(pastries)}
        </blockquote>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
