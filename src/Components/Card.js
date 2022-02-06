import React from "react";
import { Toast, Button } from "react-bootstrap";
function Card({ task, index, deleteTask, done }) {
  const handleClick = () => {
    deleteTask(task.id);
  };
  const handle = () => {
    done(task.id);
    console.log(task);
  };
  return (
    <Toast>
      <Toast.Header onClick={handleClick}>
        <strong className="me-auto">task {index + 1}</strong>
      </Toast.Header>
      <Toast.Body>{task.descreption}</Toast.Body>
      <Button variant="success" onClick={handle}>
        Done task
      </Button>{" "}
    </Toast>
  );
}

export default Card;
