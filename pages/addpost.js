import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const text = (props) =>{

    console.log(props);

};




const Addpost = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <h1>Add New Post</h1>
        </Col>
          <Col md={12}>
              <Row>
                  <Col>
                      <input type="text" onClick={text}></input>
                  </Col>
                  <Col md={12}>
                      <p> <h2>It is {new Date().toLocaleTimeString()}.</h2></p>
                  </Col>
              </Row>
          </Col>
      </Row>
    </Container>
  </div>
);


export default Addpost;
