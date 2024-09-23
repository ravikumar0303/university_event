// import React from "react";
// import { useSelector } from "react-redux";
// import Header from "../../Components/Header";
// import admin from "../../Images/home7.jpeg";
// const AdminHomeScreen = (props) => {
//   const userSignIn = useSelector((store) => store.userSignIn);
//   return (
//     <div className="Screen">
//       {!userSignIn.response && <Header title="You are not logged in" />}
//       {userSignIn.response && (
//         <Header title={"Welcome " + userSignIn.response.data.firstName} />

//       )}
//       <img
//         src={admin}
//         height="500px"
//         width="1250px"
//       />
//     </div>
//   );
// };
// export default AdminHomeScreen;