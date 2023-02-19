import React from "react";
import Table from "react-bootstrap/Table";


const BoardTable = ({ 
  boardlist,
  navigateView
  //API: userid , id, title, body

}) => (
  <div className="tableHeight">
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>User</th>
          
        </tr>
      </thead>
      
      <tbody>
        {boardlist.map((board) => (
          <tr key={board.id} onClick={navigateView(board.id)}>
            <td>{board.id}</td>
            <td>{board.title}</td>
            <td>{board.userId}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default BoardTable;
