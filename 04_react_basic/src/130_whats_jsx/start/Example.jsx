import React from "react";

const Example = () => {
  const sample1 = ( <h1 className="greeting">Hello World</h1> );
  console.log(sample1)
  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  // JSXのコードはbabelで取得する関数(Object)となる
  // babelで取得するObjectとなる。<=仮想DOMと呼ぶ
  console.log(React.createElement("h1", {
    className:"greeting"
  }, "Hello World"));


  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  //これらのJSのオブジェクトはReact要素と呼ばれる
  //React要素(仮想DOM)はBABELからReact.createElement〜〜に変換される
  React.createElement("div", null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );

  //それぞれのタブがchildrenの中の配列のpropsとして渡ってきている
  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;
