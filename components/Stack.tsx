import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Stack = ({ data, isMobile }) => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Stack</h2>
      </div>

      <Row className="justify-content-center">
        {data &&
          data
            .sort((a, b) => {
              a[2] > b[2];
            })
            .map((e, i) => (
              <Col
                xs="6"
                sm="4"
                md="3"
                xl="2"
                key={`col${i}`}
                className="my-2"
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-delay={isMobile ? 200 * (i % 2) : (i % 6) * 100}
              >
                <Card
                  body
                  style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
                >
                  <Card.Img width="100%" height="100%" src={e[1]} alt={e[0]} />
                  <Card.Body className="p-0">
                    <Card.Title
                      style={{
                        margin: "0",
                        paddingTop: "3vh",
                        textAlign: "center",
                        fontFamily: "Roboto Mono",
                      }}
                    >
                      {e[0]}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default Stack;
