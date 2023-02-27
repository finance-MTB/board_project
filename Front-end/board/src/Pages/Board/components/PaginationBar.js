import React from 'react'

import Pagination from 'react-bootstrap/Pagination';


const PaginationBar = (
  {pageNumbers,
  onClickPageNum,
  currentPage}
) => (
  <div>
    <Pagination className='justify-content-md-center mb-2'>
      <Pagination.Prev />
      {
      pageNumbers.map((num) => (
        //현재 페이지랑 클릭한 페이지가 일치하면 active부여
        <Pagination.Item key={num} active = {num === currentPage} onClick={() => onClickPageNum(num)}>
          {num}
        </Pagination.Item>
      ))
      
      //console.log(pageNumbers)
      }
      <Pagination.Next />
    </Pagination>

  </div>
)

export default PaginationBar