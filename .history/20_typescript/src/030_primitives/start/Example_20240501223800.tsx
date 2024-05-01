//プリミティブとは文字列、数値、ビックイント、真偽値、null,undefinedなどがある
const Example = () => {
  // 練習用
  let str:string = 'hello';
  str = 'Bye'
  console.log(str)

  let num: number = 102;
  console.log(num)

  let bignum: bigint = 103n;
  console.log(bignum)
};

export default Example;
