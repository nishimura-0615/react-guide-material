import { useState } from "react";

import SubButton from "./components/SubButton";
import "./Example.css"
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);


  return (
    <>
      <button className={`btn${isSelected ? "selected": "btn"}` } onClick={clickHandler}>
        ボタン
      </button>
      {/* <button className="btn">サブボタン</button> */}
      <SubButton />
      <div style={{ textAlign:"center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
