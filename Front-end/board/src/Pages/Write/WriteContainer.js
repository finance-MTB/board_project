import React, { useEffect, useState } from "react";
import WritePresenter from "./WritePresenter";
import { addData } from "../../store";
import { useDispatch } from "react-redux";

function WriteContainer() {
  //const [newdata, setNewdata] = useState("")
  const [newtitle, setNewtitle] = useState("");
  const [newuser, setNewuser] = useState("");
  const [newcontent, setNewcontent] = useState("");
  // const date = new Date()
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  const dispatch = useDispatch();

  const handelClickAddBtn = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const total = {
      title: newtitle,
      user: newuser,
      content: newcontent,
      date: `${year}-${month}-${day}`,
    };
    // setNewdata(total) 이거할필요없었음 -> redux에서 변경해주면 알아서 되는데 set함수 쓸필요없음 굳이 newdata에 넣을필요 x
    // console.log(newdata)
    dispatch(addData(total));
  };

  const handleEnterTitle = (title)=>{
    setNewtitle(title)
  }

  const handleEnterUser = (User)=>{
    setNewuser(User)
  }

  const handleEnterContent = (Content)=>{
    setNewcontent(Content)
  }
  return (
    <WritePresenter
      dispatch={dispatch}
      onEnterTitle={handleEnterTitle}
      onEnterUser={handleEnterUser}
      onEnterContent={handleEnterContent}
      onClickAddBtn={handelClickAddBtn}
    />
  );
}

export default WriteContainer;
