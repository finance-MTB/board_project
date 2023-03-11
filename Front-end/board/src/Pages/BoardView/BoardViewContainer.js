import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BoardViewPresenter from './BoardViewPresenter'

function BoardViewContainer() {
  const boardlist = useSelector((state) => {
    return state.data;
  });
  
  
  const {id} = useParams();
  //console.log(boardlist[id].content)
  //console.log(id)
//boardtable에서 게시글 클릭 => /view{index}로 이동(index출력완료) =>
  return (
    <BoardViewPresenter
    boardlist={boardlist}
    id={id}/>
  )
}

export default BoardViewContainer