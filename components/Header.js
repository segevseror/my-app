import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Router from 'next/router'

import { withRouter } from 'next/router'

function Page({ router }) {
  return <p>{router.pathname}</p>
}




const Header = () => (
  <Container className={'mb-5'}>
    <Row>
      <Col className={'text-center'}>
        <Link href={"/"}>Home page</Link>
      </Col>
    </Row>
  </Container>
);

export default Header;
