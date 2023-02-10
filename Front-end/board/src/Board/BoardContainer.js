import React from 'react'
import { useSelector } from 'react-redux';
import BoardPresenter from './BoardPresenter.js';
//글제목, 작성자, 글내용, 작성날짜 title user content date

function BoardContainer() {
  //redux store에 있는 data를 받아옴
  const data = useSelector((state) => { return state.data } )
  //console.log(data)
  return (
    <BoardPresenter
    data={data}
    />
  )
}

export default BoardContainer