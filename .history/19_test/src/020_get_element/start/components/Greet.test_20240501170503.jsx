// POINT テストコードを実行してみよう
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it('should have h1 tag', () => {
    const { debug } = render(<Greet />);
    const h1El = screen.getByText("こんにちは");
    expect(h1El).toBeInTheDocument();

    // const radioE1 = screen.getByRole('radio');
    // debug(radioE1)
    // expect(radioE1).toBeInTheDocument();

    // const imgE1 =screen.getByRole('img')
    // debug(imgE1)
    // const imgE1 =screen.getByAltText('React Logo')
    // debug(imgE1)

    const headingEl =screen.getByRole('heading',  { name:"こんにちは" })
    debug(container);
    const h2El = container.querySelector('h2')
})

// 失敗テスト
// test('if h1 tag exists', () => {
//     render(<Greet />);
//     const h1El = screen.getByText("こんばんは");
//     expect(h1El).toBeInTheDocument();
// })
