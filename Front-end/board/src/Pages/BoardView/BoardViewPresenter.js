import React from 'react'
import Card from 'react-bootstrap/Card';


const BoardViewPresenter = ({ boardlist, id }) => (
  <div className="App">
    <div className="grey-bg">
      <div className="white-bg">
        <Card style={{ width: "100%", height: '100%', paddingTop: '50px' }}>
          <Card.Body>
            <Card.Title>제목 : {boardlist[id].title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-right">
              {boardlist[id].user}
            </Card.Subtitle>
            {boardlist[id].content.split('\n').map((line, index) =>{
              return(
                <span key = {index}>
                  {line}
                  <br/>
                </span>
              )
            })}
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default BoardViewPresenter