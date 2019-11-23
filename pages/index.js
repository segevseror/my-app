import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Link from "next/link";
import Cookie from "js-cookie";
import { parseCookies } from "nookies";

const Index = (props) => {
  const [items, setItems] = useState(JSON.parse(props.items));
  const [newPost, setNewPost] = useState({});
  const [SelectedItemIndex, setSelectedItemIndex] = useState(null);



  useEffect(() => {
     Cookie.set("items", JSON.stringify( items));
  }, [items]);

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
    if (SelectedItemIndex === null || props == SelectedItemIndex || (props != SelectedItemIndex && !aprovEdit) ){
      console.log("props in if", props, "SelectedItemIndex", SelectedItemIndex);
      setAprovEdit(!aprovEdit);
    }else{
      console.log("props else", props, "SelectedItemIndex", SelectedItemIndex);
    }

    setSelectedItemIndex(props);
  };

  const removeSt = props => {
    setItems(removeArr(items, props));
  };

  return (
    <Layout>
      <Header />
      <Container>
        <Row>
          <Col>
            <div>
              <div>רשימה:</div>
              <div>
                <ul>
                  {items &&
                    items.map((item, index) => (
                      <li id={item.key}>
                        {index == SelectedItemIndex && aprovEdit ? (
                          <input
                            type="text"
                            value={item.value}
                            onChange={event =>
                              editPost(event.target.value, index)
                            }
                          />
                        ) : (
                          item.value
                        )}{" "}
                        <input
                          type="button"
                          onClick={() => changeSt(index, aprovEdit)}
                          value={index == SelectedItemIndex && aprovEdit  ? 'Block'  : 'Edit'}
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
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

Index.getInitialProps =  (req) =>{
  const Cookies = parseCookies(req);

  console.log('firstt runn' , );

  return {
    items: Cookies.items
  }
};

export default Index;

function removeArr(arr, index = 0) {
  var newArr = [];
  arr.forEach(function(item, key) {
    if (index != key) {
      newArr.push(['segev' ,'seror']);
    }
  });
  return newArr;
}
