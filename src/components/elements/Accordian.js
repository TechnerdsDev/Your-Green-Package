import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Accordian(props) {
  return (
    <li>
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>
          <b>Q.</b> {props.question}
        </Accordion.Header>
        <Accordion.Body>
          <b>A.</b>
          <p>{props.answer}<a href="{props.link}">{props.link}</a></p>
          {/* <link to="">{props.click}</link> */}
        </Accordion.Body>
      </Accordion.Item>
    </li>
  );
}
