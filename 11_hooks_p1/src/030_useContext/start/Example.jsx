import Child from "./components/Child";
import { createContext } from "react";
export const MyContext = createContext('hello')

// useContextの使い方
const Example = () => {
  return <Child />;
};

export default Example;
