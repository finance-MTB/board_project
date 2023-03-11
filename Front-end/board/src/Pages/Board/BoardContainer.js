import { findByTestId } from '@testing-library/react';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BoardPresenter from "./BoardPresenter.js";

//글제목, 작성자, 글내용, 작성날짜 title user content date

function BoardContainer() {
  //redux store에 있는 data를 받아옴
  const loadlist = useSelector((state) => {
    return state.data;
  });
  const [boardlist, setBoardlist] = useState(loadlist.slice().reverse()); //최신글을 먼저 보여주기위한 reverse사용해서 저장
  const navigate = useNavigate();
  //console.log(data)
  
  //pagination 함수 구현
  const [currentPage, setCurrentPage] = useState(1);
  const [viewPage, setViewPage] = useState(8);
  const [menu, setMenu] = useState("글제목");
  const [searchword, setSearchword] = useState("");

  //현재페이지에 해당하는 게시글 목록 가져오는 코드
  const lastBoardlistIndex = viewPage * (currentPage - 1);
  const firstBoardlistIndex = lastBoardlistIndex + viewPage;
  const currentBoardlist = boardlist.slice(lastBoardlistIndex, firstBoardlistIndex);

  const navigateView = (id) => () => {
    navigate(`/view/${id}`);
    //console.log(index)
  };
  //===========================================검색기능 구현중=====================================
  //데이터를 저장하는 곳을 바꿔야될듯 원본데이터 따로 빼놓고 원본데이터길이로 게시글 개수 카운트하고
  //사본 데이터에 저장해서 그걸 바꾸면서 게시글 리스트를 출력하도록?

  const handelChangeSearchWord = (e) =>{
    setSearchword(e.target.value);
    //console.log(e.target.value)
  }

  const handleClickSearchBtn = () =>{
    
    switch (menu) {
      case "글제목":
        const titlefinditem = boardlist.filter(
          (boardlist) => boardlist.title.includes(searchword)
        ); //여기에 검색어랑 일치한 데이터저장
        setBoardlist(titlefinditem);
        break;

      case "작성자":
        const userfinditem = boardlist.filter(
          (boardlist) => boardlist.user.includes(searchword)
        ); //여기에 검색어랑 일치한 데이터저장
        setBoardlist(userfinditem);
        break;

      case "글내용":
        const contentfinditem = boardlist.filter(
          (boardlist) => boardlist.content.includes(searchword)
        ); //여기에 검색어랑 일치한 데이터저장
        setBoardlist(contentfinditem);
        break;

      default:
        break;
    }


    //setBoardlist(titlefinditem)// 이렇게 하면 기존 데이터들 다 날라감
    //console.log(finditem)
    //const changeitems = boardlist.filter((boardlist) => boardlist !== todolist[index]);
  }

  //페이지넘버 클릭 함수
  const handleClickPageNum = (pagenum) =>{
    setCurrentPage(pagenum)
  }

  //페이지네이션 번호 목록
  // const pageNumbers = [];
  // for(let i = 1; i <= Math.ceil(boardlist.length / viewPage); i++){
  //   pageNumbers.push(i);
  // }
  const pageNumbers = boardlist.length > 0 ? 
  Array(Math.ceil(boardlist.length / viewPage)).fill().map((_, index) => index + 1) : 
  [];

  //console.log(pageNumbers)
  const handleClickMenu = (e) =>{
    //console.log(e.target.innerHTML)
    setMenu(e.target.innerHTML);
  }


  return <BoardPresenter 
  boardlist={boardlist} 
  navigateView={navigateView}
  pageNumbers={pageNumbers}
  onClickPageNum={handleClickPageNum}
  currentBoardlist={currentBoardlist}
  currentPage={currentPage}
  onClickMenu={handleClickMenu}
  menu={menu}
  onChangeSearchWord={handelChangeSearchWord}
  onClickSearchBtn={handleClickSearchBtn}
  />;
}

export default BoardContainer;
