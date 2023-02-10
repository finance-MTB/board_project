import React from 'react'

const WriteModal = ()=>(
  <div class="black-bg">
      <div class="modal-bg">
        <h4>로그인하세요</h4>
        
        <form action="success.html">
          <div class="my-3">
            <input type="text" id="loginId" class="form-control"/>
            </div>
            <div class="my-3">
              <input type="password" id="password" class="form-control"/>
            </div>
            
            <button type="submit" class="btn btn-primary" id="send">전송</button>
            <button type="button" class="btn btn-danger" id="close">닫기</button>
        </form> 
        
      </div>
    </div>
)

export default WriteModal