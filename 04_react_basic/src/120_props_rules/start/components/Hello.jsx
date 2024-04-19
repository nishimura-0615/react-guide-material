const Hello = (props) => {
  // props.name = 'Bob';
  const desc = Reflect.getOwnPropertyDescriptor(props,'name');
  console.log(desc)
  // console.log(props.name)
  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  //エラー内容は propsは読み取りのみしかできない旨のエラー
  // POINT propsは読み取り専用

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
