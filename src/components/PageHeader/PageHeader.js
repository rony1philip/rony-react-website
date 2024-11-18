/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo"> Rony Philip</h1>
          <h2>Full Stack Developer</h2>
          <div className="btn-wrapper mb-5"></div>

          <div className="btn-wrapper mb-5"></div>
          <div className="btn-wrapper mb-3"></div>
          <div className="btn-wrapper"></div>
          <div className="button-container">
            <Row>
              <Col>
                <Button
                  className="btn-icon btn-simple btn-round btn-neutral"
                  color="default"
                  href="https://github.com/rony1philip"
                  size="lg"
                >
                  <i className="fab fa-github" />
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn-icon btn-simple btn-round btn-neutral"
                  color="default"
                  href="https://www.linkedin.com/in/rony-philip-in/"
                  size="lg"
                >
                  <i className="fab fa-linkedin-in" />
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn-icon btn-simple btn-round btn-neutral"
                  color="default"
                  href="https://medium.com/@rony-philip"
                  size="lg"
                >
                  <i className="fab fa-medium-m" />
                </Button>
              </Col>
            </Row>
            <div>
              <div className="btn-wrapper mb-5"></div>
              <div></div>
              <Row>
                <Col>
                  <Button
                    className="btn-round"
                    href="/email-page"
                    role="button"
                    size="md"
                  >
                    Email Me
                    <span>
                      <i className="fas fa-angle-double-right" />
                    </span>
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="btn-round"
                    href="https://www.canva.com/design/DAEiZKfzJIo/5GtKqBUR6pp6lFExzK9Ybg/view?utm_content=DAEiZKfzJIo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he1514777bf"
                    role="button"
                    size="md"
                    outline
                  >
                    Resume
                    <span>
                      <i className="fas fa-angle-double-right" />
                    </span>
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
