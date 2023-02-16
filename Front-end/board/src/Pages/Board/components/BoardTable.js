import React from "react";
import Table from "react-bootstrap/Table";


const BoardTable = ({ 
  boardlist,
  navigateView
}) => (
  <div className="tableHeight">
    <Table striped>
      <thead>
        <tr>
          <th>title</th>
          <th>User</th>
          <th>Date</th>
        </tr>
      </thead>
      
      <tbody>
        {boardlist.map((board, index) => (
          <tr key={index} onClick={navigateView(board.id)}>
            <td>{board.title}</td>
            <td>{board.user}</td>
            <td>{board.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default BoardTable;
