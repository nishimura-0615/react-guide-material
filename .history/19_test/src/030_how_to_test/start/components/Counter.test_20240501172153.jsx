/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test('「カウントアップ」押下で「現在のカウント」が+1されるか', () => {
  //Arrage
  render(<Counter originCount={0}/>);

  //Act:

});
