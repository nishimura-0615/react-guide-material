import "./Container.css";

const Container = ({ title, children }) => {
  // containerの値がchildrenに渡ってきている
  console.log(children)
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Container;
