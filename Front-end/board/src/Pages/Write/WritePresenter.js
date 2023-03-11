import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const WritePresenter = ({
  onChangeTitle,
  onChangeUser,
  onChangeContent,
  onClickAddBtn,
}) => (
  <div className="App">
    <div className="grey-bg">
      <div className="white-bg writeForm">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>제목</Form.Label>
              <Form.Control
                type="text"
                placeholder="제목 입력"
                onChange={onChangeTitle}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>작성자</Form.Label>
              <Form.Control
                type="text"
                placeholder="작성자"
                onChange={onChangeUser}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>내용</Form.Label>
            <Form.Control
            
              style={{ height: "300px" }}
              as="textarea"
              placeholder="게시글 작성"
              onChange={onChangeContent}
            />
          </Form.Group>

        
          <Button variant="primary" onClick={onClickAddBtn}>
            글쓰기
          </Button>
        
        </Form>
      </div>
    </div>
  </div>
);

export default WritePresenter;
