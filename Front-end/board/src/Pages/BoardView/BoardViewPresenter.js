import React from 'react'

const BoardViewPresenter = (
  {
    boardlist,
    id
  }
) => (
  
  <div>
    <div>
      <h2>{boardlist[id].title}</h2>
      <p>{boardlist[id].user}</p>
    </div>

    <div>
      <p>{boardlist[id].content}</p>
    </div>
  </div>
)

export default BoardViewPresenter