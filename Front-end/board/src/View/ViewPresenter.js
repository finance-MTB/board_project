import React from "react";
import Header from "../Pages/Board/components/Header";
import BoardTable from "../Pages/Board/components/BoardTable";
import PaginationBar from "../Pages/Board/components/PaginationBar";
import SearchandWrite from "../Pages/Board/components/SearchandWrite";

const ViewPresenter = ({ data }) => (
  <div className="grey-bg">
    <div className="white-bg">
      <Header data={data} />
      <BoardTable data={data} />
      <PaginationBar />
      <SearchandWrite />
    </div>
  </div>
);

export default ViewPresenter;
