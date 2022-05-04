import React, { useContext } from "react";
import NavigationBar from "./Components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import FindClasses from "./Components/FindClasses";
import JoinAsATeacher from "./Components/JoinAsATeacher";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ChangePassword from "./Components/ChangePassword";
import ForgetPassword from "./Components/ForgetPassword";
import AuthContext from "./Auth/auth-context";
import { Navigate } from "react-router-dom";
import All from "./Components/All.js";
import Art from "./Components/Art";
import Dance from "./Components/Dance";
import Music from "./Components/Music";
import Yoga from "./Components/Yoga";
import Details from "./Components/Details";
import Faq from "./Components/Faq";
import Terms from "./Components/Terms";
import PrivacyPolicy from "./Components/PrivacyPolicy";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<FindClasses />}>
          <Route index element={<All />} />
          <Route path="arts" element={<Art />} />
          <Route path="dance" element={<Dance />} />
          <Route path="music" element={<Music />} />
          <Route path="yoga" element={<Yoga />} />
        </Route>
        <Route path=":id" element={<Details />} />
        {authCtx.isLoggedIn && (
          <Route path="/joinasteacher" element={<JoinAsATeacher />} />
        )}
        {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
        {!authCtx.isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {authCtx.isLoggedIn && (
          <Route path="/changepassword" element={<ChangePassword />} />
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        )}
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms&conditions" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default App;
