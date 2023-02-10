import React, { useState } from 'react'
import WritePresenter from './WritePresenter'
import { addData } from '../store';
import { useDispatch } from 'react-redux';

function WriteContainer() {
  //const [newdata, setNewdata] = useState("")
  const [newtitle, setNewtitle] = useState("")
  const [newuser, setNewuser] = useState("")
  const [newcontent, setNewcontent] = useState("")
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dispatch = useDispatch()

  const handelClickAddBtn = () =>{
    const total = {
      title : newtitle,
      user : newuser,
      content : newcontent,
      date: `${year}-${month}-${day}`
    }
    // setNewdata(total)
    // console.log(newdata)
    dispatch(addData(total))
  };

  return (
    <WritePresenter
    dispatch={dispatch}
    setNewtitle={setNewtitle}
    setNewuser={setNewuser}
    setNewcontent={setNewcontent}
    
    onClickAddBtn={handelClickAddBtn}/>
  )
}

export default WriteContainer