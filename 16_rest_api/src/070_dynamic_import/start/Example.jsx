// POINT ダイナミックインポートとは
import { add } from "./add";
const Example = () => {
  const dynamicImport = async () => {
      const module = await import("./add");
      console.log(module);
    }
    dynamicImport();
    // console.log(add(1,2))

};

export default Example;
