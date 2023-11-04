import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple"> Subha Chandra </span>
            from <span className="purple">  Bangalore, India.</span>
            <br />I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            <br />
            Shortly after graduating from Sri Krishnadevaraya University,I work on a wide variety of interesting and meaningful projects on a daily basis.
            <br />
            <br />
            Here are a few technologies I've been working with recently:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Java
            </li>
            <li className="about-activity">
              <ImPointRight /> Spring Boot
            </li>
            <li className="about-activity">
              <ImPointRight /> Hibernate
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Subha Chandra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
