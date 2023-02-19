import React from 'react'

const BoardViewPresenter = (
  {
    boardlist
  }
) => (
  
  <div>
    <div>
      <h2>{boardlist.title}</h2>
      <p>userId : {boardlist.userId}</p>
    </div>

    <div>
      <p>{boardlist.body}</p>
    </div>
  </div>
)

export default BoardViewPresenter