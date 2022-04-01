import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ addToFavList }) => {
  const [name, setName] = useState("");

  const [robot, setRobot] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setRobot(name);
    setName("");

    //call the function to call the api
  };

  const addAndResetRobot = (name) => {
    addToFavList(name);
    setRobot();
  };

  console.log(robot);

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search..."
              value={name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="mt-5">
        <Col>
          <CustomCard name={robot} fun={addAndResetRobot} />
        </Col>
      </Row>
    </div>
  );
};
