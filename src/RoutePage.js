import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import App from "./components/quiz/languagePage/App";
import Web from "./components/quiz/languagePage/Web";
import Iot from "./components/quiz/languagePage/Iot";
import ArVr from "./components/quiz/languagePage/ArVr";
import Cyber from "./components/quiz/languagePage/Cyber";
import DataScience from "./components/quiz/languagePage/DataScience";
import Robotics from "./components/quiz/languagePage/Robotics";
import WebResult from "./components/quiz/RankList/Domain/Web";
import AppResult from "./components/quiz/RankList/Domain/App";
import IotResult from "./components/quiz/RankList/Domain/Iot";
import CyberResult from "./components/quiz/RankList/Domain/Cyber";
import ArVrResult from "./components/quiz/RankList/Domain/ArVr";
import RoboResult from "./components/quiz/RankList/Domain/Robotics";
import DataScienceResult from "./components/quiz/RankList/Domain/DataScience";
const Rank = lazy(() => import("./components/quiz/RankList/Rank"));

function RoutePage() {
  return (
    <Suspense
      fallback={
        <Animation>
          <span />
        </Animation>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/appdev" element={<App />} />
          <Route path="/quiz/webdev" element={<Web />} />
          <Route path="/quiz/arvr" element={<ArVr />} />
          <Route path="/quiz/iot" element={<Iot />} />
          <Route path="/quiz/datascience" element={<DataScience />} />
          <Route path="/quiz/robotics" element={<Robotics />} />
          <Route path="/quiz/cyber" element={<Cyber />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/rank/webdev" element={<WebResult />} />
          <Route path="/rank/appdev" element={<AppResult />} />
          <Route path="/rank/iot" element={<IotResult />} />
          <Route path="/rank/datascience" element={<DataScienceResult />} />
          <Route path="/rank/arvr" element={<ArVrResult />} />
          <Route path="/rank/cyber" element={<CyberResult />} />
          <Route path="/rank/robotics" element={<RoboResult />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default RoutePage;

const rotate = keyframes`
from{
    transform: rotate(0);
}
  to{
      transform: rotate(380deg);
  }
`;

const Animation = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  align-items: ceter;
  justify-content: center;
  span {
    width: 30px;
    height: 30px;
    background: transparent;
    display: block;
    border-top: 3px solid rgba(68, 2, 255, 1);
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
    margin: auto;
  }
`;
