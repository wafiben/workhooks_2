import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Add({ addTask }) {
  const [task, setTask] = useState({ id: 3, descreption: " ", done: false });
  const handleChange = (event) => {
    setTask({
      ...task,
      id: Math.floor(Math.random() * 10000) + 1,
      descreption: event.target.value,
    });
  };
  const onSubmit = (event) => {
      event.preventDefault()
    addTask(task);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>task</Form.Label>
        <Form.Control
          type="text"
          placeholder="write your task"
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Add;
