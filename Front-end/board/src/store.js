import { configureStore, createSlice } from "@reduxjs/toolkit";

//createSlice로 state를 만들고 configureStore()안에 state등록


const data = createSlice({
  name: 'data',
  initialState : [
  //   {
  //   id: 0,
  //   title: 1,
  //   user: 1,
  //   content: 1,
  //   date: 2023,
  // }
  ],
  reducers : {
    addData(state, action){
      state.push(action.payload);
      
    }
  }
});

const boardid = createSlice({
  name : 'boardid',
  initialState : {id: 0},
  reducers : {
    addID(state){
      state.id += 1
      //console.log(state.id)
    }
  }
})


export const {addData} = data.actions
export const {addID} = boardid.actions

export default configureStore({
  reducer: {
    data : data.reducer,
    boardid : boardid.reducer
  }
})