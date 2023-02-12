import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const WritePresenter = ({
  setNewtitle,
  setNewuser,
  setNewcontent,
  onClickAddBtn,
}) =>(
  
  <div className='App'>
    <div className='grey-bg'>
      <div className='white-bg writeForm'>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목 입력" onChange={(e)=>{setNewtitle(e.target.value)}}/>
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>작성자</Form.Label>
          <Form.Control type="text" placeholder="작성자" onChange={(e)=>{setNewuser(e.target.value)}}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>내용</Form.Label>
        <Form.Control style={{height:'300px'}} as='textarea' placeholder="게시글 작성" onChange={(e)=>{setNewcontent(e.target.value)}}/>
      </Form.Group>

      <Link to='/'>
        <Button variant="primary" onClick={onClickAddBtn}>글쓰기</Button>
      </Link>
    </Form>
      </div>
    </div>
  </div>
)

export default WritePresenter