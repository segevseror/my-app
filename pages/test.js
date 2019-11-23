import Layout from "../components/Layout";
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "nookies";

const Index = ({initRemmberMeValue}) => {

  console.log('first', initRemmberMeValue);

  const [rememberMe, setRememberMe] = useState(() =>
    JSON.parse(initRemmberMeValue)
  );


  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  return (
    <div>
      <Layout>
        <Header />
        <Container>
          <Row>
            <Col md="{12"> hello:</Col>
            <Col md={12}>
              remember:{" "}
              <input
                type="checkbox"
                value={rememberMe}
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

Index.getInitialProps = (req ) => {
  console.log('firs runnnn')
  const cookies = parseCookies(req);
  return {
    initRemmberMeValue: cookies.rememberMe
  };
};

export default Index;
