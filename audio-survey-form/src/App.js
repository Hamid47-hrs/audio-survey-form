import React from "react";
import { Route, Routes } from "react-router";
import Main from "./Components/Main";
import Report from "./Components/Report";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default App;
