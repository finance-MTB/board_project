import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Board from "../Pages/Board";
import Write from "../Pages/Write";
import BoardView from '../Pages/BoardView';

function Router() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/board");
  }, []);

  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="/write" element={<Write />} />
      <Route path="/view/:id" element={<BoardView />} />d
    </Routes>
  );
}

export default Router;
