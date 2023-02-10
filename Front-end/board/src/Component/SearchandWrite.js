import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from 'react-bootstrap';
import WriteModal from './WriteModal';
const SearchandWrite = () => (
  <div>
    <InputGroup className="display-center mb-2 w-50">
      <DropdownButton
        variant="outline-secondary"
        title="글제목"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#">글제목</Dropdown.Item>
        <Dropdown.Item href="#">작성자</Dropdown.Item>
        <Dropdown.Item href="#">글내용</Dropdown.Item>
      </DropdownButton>

      <Form.Control aria-label="Text input with dropdown button" />
      <Button variant="outline-dark">Search</Button>
      <Button variant="outline-dark">글쓰기</Button>
    </InputGroup>
  </div>
);

export default SearchandWrite