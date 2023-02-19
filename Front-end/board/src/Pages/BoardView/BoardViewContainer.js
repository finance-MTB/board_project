import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BoardViewPresenter from './BoardViewPresenter'
import axios from 'axios';

function BoardViewContainer() {
  const [boardlist, setBoardlist] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((result)=>{
      const newlist = result.data;
      setBoardlist(newlist)
      //console.log(boardlist);
    })
    .catch(()=>{console.log('데이터 받아오기 실패')})
  }, [])
  
  //console.log(id)
//boardtable에서 게시글 클릭 => /view{index}로 이동(index출력완료) =>
  return (
    <BoardViewPresenter
    boardlist={boardlist}/>
  )
}

export default BoardViewContainer