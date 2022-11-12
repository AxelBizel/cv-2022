import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLink,
  faPen,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const Projets = ({ data, isMobile }): any => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Projets</h2>
      </div>

      <Row className="justify-content-center">
        {data &&
          data.map((p, i) => (
            <Col
              key={i}
              xs="12"
              md="6"
              xl="3"
              className="my-2"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay={(isMobile ? 0 : i % 4) * 100}
            >
              <Card body className="projectCard">
                <a href={p[4]} target="_blank" rel="noopener noreferrer">
                  <Card.Img width="100%" src={p[6]} alt={p[0]} />
                </a>
                <Card.Body className="p-0">
                  <Card.Title
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <h5>{p[0]}</h5>
                    <h6>{p[7]}</h6>
                  </Card.Title>
                  <Card.Text>
                    <span className="detailsItem">
                      <FontAwesomeIcon icon={faCalendar} />
                      &nbsp;{p[1]}
                    </span>
                    <span className="detailsItem">
                      <FontAwesomeIcon icon={faPen} />
                      &nbsp;{p[3]}
                    </span>
                    {p[2] && (
                      <span className="detailsItem">
                        <FontAwesomeIcon icon={faToolbox} />
                        &nbsp;{p[2]}
                      </span>
                    )}
                    <span className="linkSection" key={i}>
                      <a href={p[4]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLink} />
                        &nbsp; &nbsp;{p[5]}
                      </a>
                      <br />
                      <br />
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Projets;
