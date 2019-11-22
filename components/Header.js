import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";


const Header = () => (
  <Container className={'mb-5'}>
    <Row>
      <Col className={'text-center'}>
        <Link href={"/"}>Home page</Link>
      </Col>
      <Col className={'text-center'}>
        <Link href={"/addpost"}>Add post</Link>
      </Col>
    </Row>
  </Container>
);

export default Header;
