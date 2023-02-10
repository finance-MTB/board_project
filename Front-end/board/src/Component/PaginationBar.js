import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';


const PaginationBar = () => (
  <div>
    <Pagination className='justify-content-md-center mb-2'>
      <Pagination.Prev />

      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Next />
    </Pagination>

  </div>
)

export default PaginationBar