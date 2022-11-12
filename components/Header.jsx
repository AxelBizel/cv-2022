import React from "react";
import Avatar from "../public/Avatar-AxelBizel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenFancy,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Header = ({ data }) => {
  return (
    <div className="header">
      <Container>
        <div className="header-contents">
          <Row className="justify-content-between">
            <Col xs="12" md="5">
              <div className="header-img" data-aos="zoom-in">
                <Image
                  src={Avatar}
                  alt="Axel Bizel's Avatar"
                  className="avatar"
                />
              </div>
            </Col>
            <Col xs="12" md="7">
              <div className="header-text">
                <div data-aos="fade-up">
                  <h1 className="header-title">Axel Bizel</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay={200}>
                  <p>
                    <FontAwesomeIcon icon={faCode} />
                    &nbsp;{data[0]}
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay={400}>
                  <p>
                    <FontAwesomeIcon icon={faChartArea} />
                    &nbsp;{data[1]}
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <p>
                    <FontAwesomeIcon icon={faPenFancy} />
                    &nbsp;{data[2]}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
