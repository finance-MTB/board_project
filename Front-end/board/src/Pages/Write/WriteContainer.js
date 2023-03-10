import React, { useEffect, useState } from "react";
import WritePresenter from "./WritePresenter";
import { addData, addID } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function WriteContainer() {
  //const [newdata, setNewdata] = useState("")
  const [newtitle, setNewtitle] = useState("");
  const [newuser, setNewuser] = useState("");
  const [newcontent, setNewcontent] = useState("");
  const navigate = useNavigate();


  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   console.log(newid);
  // }, [newid])
  const listId = useSelector((state) => {
    return state.boardid.id;
  });

  //state변경함수를 넘겨서 Presenter에서 쓰는거 x , 무조건 Container에서 함수처리 다 하고 넘기기
  //함수자리에는 함수 전체를 가져와서 쓰는거기 때문에 e를 함수에서 선언해서 사용함
  //presenter에서 e를 따로 사용안해도 함수자체에 e값을 가져와 사용
  const handleChangeTitle = (e) => {
    setNewtitle(e.target.value);
  };

  const handleChangeUser = (e) => {
    setNewuser(e.target.value);
  };

  const handleChangeContent = (e) => {
    setNewcontent(e.target.value);
  };

  //날짜관련함수를 버튼 클릭 함수에 넣는 이유: 11:59분에 창을 키고 글을 쓰다가 12:01분에 글추가버튼을 누를경우를 생각해야함
  const handelClickAddBtn = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    
    const total = {
      id: listId,
      title: newtitle,
      user: newuser,
      content: newcontent,
      date: `${year}-${month}-${day}`,
    };
    // setNewdata(total) 이거할필요없었음 -> redux에서 변경해주면 알아서 되는데 set함수 쓸필요없음 굳이 newdata에 넣을필요 x
    // console.log(newdata)
    //dispatch(addData(total));
    
    if (total.title === '' || total.user === '' || total.content === '') {
      alert('빈칸을 모두 입력해주세요.');
    } else {
      dispatch(addData(total));
      dispatch(addID());
      navigate('/board');
    }

    

};

  return (
    <WritePresenter
      dispatch={dispatch}
      onChangeTitle={handleChangeTitle}
      onChangeUser={handleChangeUser}
      onChangeContent={handleChangeContent}
      onClickAddBtn={handelClickAddBtn}
    />
  );
}

export default WriteContainer;
