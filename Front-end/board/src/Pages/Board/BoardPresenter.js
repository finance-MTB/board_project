import React from "react";
import { BoardTable, Header, PaginationBar, SearchandWrite } from './components';

const BoardPresenter = ({ data }) => (
  <div className="App">
    <div className="grey-bg">
      <div className="white-bg">
        <Header data={data} />
        <BoardTable data={data} />
        <PaginationBar />
        <SearchandWrite />
      </div>
    </div>
  </div>
);

export default BoardPresenter;