import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ['item1', 'item2', 'item3']
  const hello = (arg) => `${arg} function`;
  return (
    <div className= {title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello('hello')}</h3>
      {<h3>{/*画面上に表示されません*/}</h3> }
    </div>
  )
}

export default Expression;
