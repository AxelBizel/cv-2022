import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const formationCard = (f, i) => {
  return (
    <VerticalTimelineElement
      key={`formation${i}`}
      date={f[1]}
      iconStyle={{
        backgroundImage: `url(${f[3]})`,
        backgroundColor: "#fff",
        color: "#666666",
        backgroundSize: "cover",
      }}
    >
      <h3>{f[0]}</h3>
      <p>
        <em>{f[2]}</em>
      </p>
    </VerticalTimelineElement>
  );
};

const FormationTimeline = ({ data, isMobile }) => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Formation</h2>
      </div>
      {data && (
        <VerticalTimeline animate={!isMobile}>
          {data.map((f, i) => formationCard(f, i))}
        </VerticalTimeline>
      )}
    </Container>
  );
};

export default FormationTimeline;
