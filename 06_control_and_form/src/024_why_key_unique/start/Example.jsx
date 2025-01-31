//for文も同じようにkeyプロパティを設定する必要がある為、key={animal}を記載する
// POINT keyをつける際の注意点
//キーには必ず一意の値を設定する
// キーには設定した値は変更しない
// 配列のインデックスはなるべく使わない
// 配列のインデックスを子要素として設定すると配列に更新があった際に元々紐づいていた値が更新先に値が変更されていまい、正規化が損なわれる為。
const Example = () => {
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
  );
};

export default Example;
