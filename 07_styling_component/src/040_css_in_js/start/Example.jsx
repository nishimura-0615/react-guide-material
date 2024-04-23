import { useState } from "react";
import styled from "styled-components"

console.dir(styled)
//  styled.buttonのcssの内容は文字列として認識されている
const StyledButton = styled(({ isSelected, ...rest }) => <button {...rest} />)`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? "pink" : "")};
`;


/* POINT 部分的なスタイルの継承 */
const OrangeButton = styled(StyledButton)`
  :hover{
    color: red;
    opacity: 0.7;
  }
  span {
    font-size: 2em;
  }
`;
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected}onClick={clickHandler}>ボタン</StyledButton>
      <OrangeButton isSelected={isSelected}onClick={clickHandler}><span></span>ボタン</OrangeButton>
      <button className={`btn ${isSelected ? "selected" : ""}`}onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
