import { configureStore, createSlice } from '@reduxjs/toolkit'

//createSlice로 state를 만들고 configureStore()안에 state등록
const data = createSlice({
  name: 'data',
  initialState : [
    {
      title: "세번째글",
      user: "park",
      content: "세번째 글내용입니다.",
      date: "2023-01-03",
    },
    {
      title: "두번째글",
      user: "lee",
      content: "두번째 글내용입니다.",
      date: "2023-02-01",
    },
    {
      
      title: "첫번째글",
      user: "kim",
      content: "첫번째 글내용입니다.",
      date: "2023-02-06",
    },
  ]
});

export default configureStore({
  reducer: {
    data : data.reducer
  }
})