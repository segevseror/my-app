import Layout from "../components/Layout";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";

const Click = () => {
  const [items, setItems] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [SelectedItemIndex, setSelectedItemIndex] = useState(null);

  const addPost = props => {
    setNewPost({ key: items.length, value: props.target.value });
  };
  const addCount = () => {
    setItems([...items, newPost]);
    setNewPost({ value: "" });
  };



  const editPost = (newValue, index) => {
    let copyState = JSON.parse(JSON.stringify(items));
    copyState[index] = copyState[index] = { value: newValue };
    setItems(copyState);
  };

  const [aprovEdit, setAprovEdit] = useState(false);
  const changeSt = props => {
    setAprovEdit(!aprovEdit);
    setSelectedItemIndex(props);
  };

  const removeSt = props => {
    setItems(removeArr(items, props));
  };

  return (
    <div>
      <div>רשימה:</div>
      <div>
        <ul>
          {items &&
            items.map((item, index) => (
              <li id={item.key}>
                {aprovEdit ? (
                  <input
                    type="text"
                    value={item.value}
                    onChange={event => editPost(event.target.value, index)}
                  />
                ) : (
                  item.value
                )}{" "}
                <input
                  type="button"
                  onClick={() => changeSt(index, aprovEdit)}
                  value="Edit"
                />{" "}
                <input
                  type="button"
                  onClick={() => removeSt(index)}
                  value="Remove"
                />
              </li>
            ))}
        </ul>
      </div>
      <input type="text" value={newPost.value} onChange={addPost} />
      <input type="button" value={"send"} onClick={addCount} />
    </div>
  );
};

export default () => (
  <Layout>
    <Header />
    <Container>
      <Row>
        <Col>
          <Click />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </Layout>
);

function removeArr(arr, index = 0) {
  var newArr = [];
  arr.forEach(function(item, key) {
    if (index != key) {
      newArr.push(item);
    }
  });
  return newArr;
}
