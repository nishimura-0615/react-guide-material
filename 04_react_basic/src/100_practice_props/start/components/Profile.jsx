import "./Profile.css";


const Profile = ({ name="John Doe", age="??", country="Japan" }) => {
  return (
    <div className="profile">
      <h3>Name:{name}</h3>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
    </div>
  )

};

export default Profile;

// 自分の回答
// import "./Profile.css";

//回答との差異としてデフォルト引数を使って記載している
// 波括弧の外側にName,Age,Countryと記載して出力している。
// const Profile = ({ name, age, country }) => {
//   return (
//     <div className="profile">
//       <h3>{name}</h3>
//       <p>{age}</p>
//       <p>{country}</p>
//     </div>
//   )

// };

// export default Profile;
