import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BoardPresenter from "./BoardPresenter.js";
import axios from 'axios';
//글제목, 작성자, 글내용, 작성날짜 title user content date
//API: userid , id, title, body

function BoardContainer() {
  //redux store에 있는 data를 받아옴
  // const boardlist = useSelector((state) => {
  //   return state.data;
  // });
  
  const navigate = useNavigate();
  //console.log(data)
  const [boardlist, setBoardlist] = useState([]);
  const navigateView = (id) => () => {
    navigate(`/view/${id}`);
    //console.log(index)
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result)=>{  
      setBoardlist((result.data))
      //console.log(result.data);
    })
    .catch(()=>{console.log('데이터 받아오기 실패')})
  }, [ ])


  //console.log(boardlist)

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
