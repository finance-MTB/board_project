import { configureStore, createSlice } from "@reduxjs/toolkit";

//createSlice로 state를 만들고 configureStore()안에 state등록

const initialState = [
  {
    id: 0,
    title: "세번째글",
    user: "park",
    content: "세번째 글내용입니다.",
    date: "2023-2-03",
  },
  {
    id: 1,
    title: "두번째글",
    user: "lee",
    content: "두번째 글내용입니다.",
    date: "2023-1-29",
  },
  {
    id: 2,
    title: "첫번째글",
    user: "kim",
    content: "첫번째 글내용입니다.",
    date: "2023-1-06",
  },
];

const reducers = {
  addData: (state, action) => {
    state.unshift(action.payload);
  },
};

const data = createSlice({
  name: "data",
  initialState,
  reducers,
});

// const id = createSlice({
//   name : 'id',
//   initialState: {id:0},
//   reducers: {
//     addid(state){
//       state.id++
//       console.log(state.id)
//     }
//   }

// })

export const { addData } = data.actions;
//export const { addid } = id.actions;

export default configureStore({
  reducer: {
    data: data.reducer,
    //id: id.reducer
  },
});
