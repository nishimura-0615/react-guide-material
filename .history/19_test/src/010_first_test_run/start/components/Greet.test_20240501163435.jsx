import {render} from "@testing-library/react";
import Greet from "./Greet";

test('h1が存在するかどうか', () =>{
  render(<Greet/>);
  const h1E1 = screen.getBytext("こんにちは")
}
