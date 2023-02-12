import React from "react";
import { BoardTable, Header, PaginationBar, SearchandWrite } from './components';

const BoardPresenter = ({ 
  data,
  navigateView
}) => (
  <div className="App">
    <div className="grey-bg">
      <div className="white-bg">
        <Header data={data} />
        <BoardTable data={data} navigateView={navigateView}/>
        <PaginationBar />
        <SearchandWrite />
      </div>
    </div>
  </div>
);

export default BoardPresenter;