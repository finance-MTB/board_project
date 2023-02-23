import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BoardPresenter from "./BoardPresenter.js";

//글제목, 작성자, 글내용, 작성날짜 title user content date

function BoardContainer() {
  //redux store에 있는 data를 받아옴
  const loadlist = useSelector((state) => {
    
    return state.data;
  });
  const boardlist = loadlist.slice().reverse()
  
  const navigate = useNavigate();
  //console.log(data)

  const navigateView = (id) => () => {
    
    navigate(`/view/${id}`);
    //console.log(index)
  };
  // const handelClickList = (index) => () => {

  // }

  //게시판 api가져옴
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return <BoardPresenter boardlist={boardlist} navigateView={navigateView} />;
}

export default BoardContainer;
