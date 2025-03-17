import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MainPage, { MainDetail } from "./MainPage1";
import MainPage from "./MainPage1";
// import MainPage2 from "./MainPage2";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* 메인 첫번째 */}
    <MainPage />
    {/* <MainDetail /> */}

    {/* 메인 두번째 */}
    {/* <MainPage2 /> */}
  </React.StrictMode>
);
