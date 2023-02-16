import React from 'react'


const Header=({
  boardlist
})=>(
  <div>
    <h2>게시판</h2>
    <p style={{color:'grey'}}>총 게시물:{boardlist.length}</p>
    
  </div>
)

export default Header