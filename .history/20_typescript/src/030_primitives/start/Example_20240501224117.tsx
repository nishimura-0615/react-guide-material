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

  let bool: boolean = true;
  console.log(bool);

  let undefinedValue: undefined = undefined;
  //リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: 'Hello' =' Hello'

};

export default Example;
