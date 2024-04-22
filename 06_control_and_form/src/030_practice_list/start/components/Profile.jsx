// 自分の回答
// const profiles =({
//    name:Geo,
//    age:18,
//    hobby:sports,music,
//    name: Tom,
//    age: 25,
//    hobby:movie,music,
//    name: Lisa,
//    age: 21,
//    hobby:sports,travel,game})

// const Profile = ({ name, age, hobby }) => {
//   const ProfileList = [];
//   for (const profile of profiles) {
//     ProfileList.push(<li key={profiles}></li>);
//   }
//   return (
//     <div>
//       <hr />
//       <div>Name: {name}</div>
//       <div>Age: {age}</div>
//       <div>
//         <div>Hobby:{hobby}</div>
//         <ul>
//           {hobby.map((hobby) => (
//             <li key={hobby}>{hobby}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// 回答コード
const Profile = ({ name, age, hobbies }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobbies.map((hobby) => (
            /* リストにはkeyを設定することを忘れないように！ */
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
