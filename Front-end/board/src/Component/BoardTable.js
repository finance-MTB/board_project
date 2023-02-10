import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const BoardTable = ({
  data
}) => (
  <div className='tableHeight'>
    
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
          <tr key={index}>
            <td>{data[index].title}</td>
            <td>{data[index].user}</td>
            <td>{data[index].date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

export default BoardTable