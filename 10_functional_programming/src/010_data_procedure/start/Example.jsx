const Example = () => {
  // POINT 関数型
  // （値の）状態と処理を分離して管理
  // A(data) -> B(data) -> C(data) -> 結果
  // ★ 状態と処理は切り離す
  const nums = [1,2,3];
  //reduce:配列の要素をひとつの値にまとめるメソッド
  const sum = (arry) => arry.reduce((accu, curr) => accu + curr);

  // forEachの場合
  // const nums = [1,2,3];
  // const sum = (arry) => {
  //   const nums = arry;
  //     let sumValue = 0;
  //     nums.forEach(num => sumValue += num);
  //     return sumValue;
  // };



  // POINT オブジェクト指向型
  // 状態（データ）と処理を対で管理
  // obj.method(); -> 結果
  const numObj = {
    nums: [1,2,3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for(let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }

  return (
    <>
      <div>オブジェクト指向型:{numObj.sum()}</div>
      <div>関数型:{sum(nums)}</div>
    </>
  )
};

export default Example;
