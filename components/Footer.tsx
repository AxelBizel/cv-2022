import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs="4" lg="2" className="footer-logo-container">
            <a href="mailto:axel.bizel@gmail.com">
              <FontAwesomeIcon className="footer-logo" icon={faEnvelope} />
              <p>E-mail</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://github.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer-logo" icon={faGithub} />
              <p>Github</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://www.linkedin.com/in/axel-bizel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer-logo" icon={faLinkedin} />
              <p>LinkedIn</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://twitter.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer-logo" icon={faTwitter} />
              <p>Twitter</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://drive.google.com/file/d/144v_knnVBvL-AirrpLl0Hcyt4Nl2SBHy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer-logo" icon={faFileDownload} />
              <p>CV</p>
            </a>
          </Col>
        </Row>
        <Row>
          <p className="copyright-mention">&#9400; Axel Bizel - 2022</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
