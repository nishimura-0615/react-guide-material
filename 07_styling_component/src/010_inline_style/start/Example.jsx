import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    const style ={
        width:120,
        height:60,
        display:"block",
        fontWeight:"bold",
        // "border-radius"の-(ハイフン)はjavaScriptのプロパティとして設定できない。
        "border-radius":9999,
        cursor: "pointer",
        border: "none",
        margin:"auto",
        background: isSelected ? "pink" : ""
        //::before,::after,:hover:activeといった要素はインラインでは適用でいない
        // @media(min-width: 600px) { } style属性では使えない
    }
    return (
        <>
            <button onClick={clickHandler}style={style}>ボタン</button>
            <button style={style}>ボタン2</button>
            <div style={{ textAlign:"center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
