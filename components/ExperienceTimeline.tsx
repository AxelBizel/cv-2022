import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const xpCard = (xp, i) => {
  const url = xp[0],
    title = xp[2],
    date = xp[3],
    description = xp[4],
    details1 = xp[5],
    details2 = xp[6],
    details3 = xp[7],
    details4 = xp[8];
  return (
    <VerticalTimelineElement
      key={`formation${i}`}
      date={date}
      iconStyle={{
        backgroundImage: url && `url(${url})`,
        backgroundColor: "#fff",
        color: "#666666",
        backgroundSize: "cover",
      }}
    >
      <h3>{title && title}</h3>
      <p>
        <em>{description && description}</em>
      </p>
      <br />
      <ul>
        {details1 && <li>{details1}</li>}
        {details2 && <li>{details2}</li>}
        {details3 && <li>{details3}</li>}
        {details4 && <li>{details4}</li>}
      </ul>
    </VerticalTimelineElement>
  );
};

function ExperienceTimeline({ data, isMobile }) {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Expérience</h2>
      </div>
      {data && (
        <VerticalTimeline animate={!isMobile}>
          {data?.map((xp, i) => xpCard(xp, i))}
        </VerticalTimeline>
      )}
    </Container>
  );
}

export default ExperienceTimeline;
