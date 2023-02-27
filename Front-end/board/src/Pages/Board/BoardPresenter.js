import React from "react";
import { BoardTable, Header, PaginationBar, SearchandWrite } from './components';

const BoardPresenter = ({ 
  boardlist,
  navigateView,
  pageNumbers,
  onClickPageNum,
  currentBoardlist,
  currentPage,
  onClickMenu,
  menu
}) => (
  <div className="App">
    <div className="grey-bg">
      <div className="white-bg">
        <Header boardlist={boardlist} />
        <BoardTable currentBoardlist={currentBoardlist} navigateView={navigateView}/>
        <PaginationBar currentPage={currentPage} pageNumbers={pageNumbers} onClickPageNum={onClickPageNum}/>
        <SearchandWrite menu={menu} onClickMenu={onClickMenu}/>
      </div>
    </div>
  </div>
);

export default BoardPresenter;