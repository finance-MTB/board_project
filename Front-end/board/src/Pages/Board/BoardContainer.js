import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BoardPresenter from "./BoardPresenter.js";
//글제목, 작성자, 글내용, 작성날짜 title user content date

function BoardContainer() {
  //redux store에 있는 data를 받아옴
  const data = useSelector((state) => {
    return state.data;
  });
  const navigate = useNavigate();
  //console.log(data)

  const navigateView = () => {
    navigate("/view");
  };
  // const handelClickList = (index) => () => {

  // }
  return (
    <BoardPresenter
      data={data}
      navigateView={navigateView}
    />
  )
}

export default BoardContainer;
