import React from "react";
import { BoardTable, Header, PaginationBar, SearchandWrite } from './components';

const BoardPresenter = ({ 
  boardlist,
  navigateView
}) => (
  <div className="App">
    <div className="grey-bg">
      <div className="white-bg">
        <Header boardlist={boardlist} />
        <BoardTable boardlist={boardlist} navigateView={navigateView}/>
        <PaginationBar />
        <SearchandWrite />
      </div>
    </div>
  </div>
);

export default BoardPresenter;