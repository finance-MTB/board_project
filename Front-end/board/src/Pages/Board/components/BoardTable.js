import React from "react";
import Table from "react-bootstrap/Table";


const BoardTable = ({ 
  data,
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
        {data.map((a, index) => (
          <tr key={index} onClick={navigateView}>
            <td>{data[index].title}</td>
            <td>{data[index].user}</td>
            <td>{data[index].date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default BoardTable;
