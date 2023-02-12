import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "../Pages/Board";
import Write from "../Pages/Write"
import BoardView from "../Component/BoardView";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/write" element={<Write />} />
      <Route path="/view" element={<BoardView />} />
    </Routes>
  );
}

export default Router;
