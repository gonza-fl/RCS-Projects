import { useEffect, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";
import TaskListItem from "../Inputs";
import "./style.css";

const ToDo = () => {
  const [inputValue, setInput] = useState("");
  const [arrayTask, setTask] = useState([]);

  useEffect(() => {
    setInput("");
  }, [arrayTask]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e?.preventDefault();
    inputValue?.trim() && setTask([...arrayTask, inputValue?.trim()]);
  };

  return (
    <div>
      <Container fluid className="ToDoList p-5">
        <Row className="justify-content-center">
          <Col xs={9} md={6}>
            <h1 className="mb-4 border-bottom border-secondary text-dark text-center py-3">
              Lista de Tareas
            </h1>
            <Form
              onSubmit={handleSubmit}
              className="d-flex justify-content-between"
            >
              <Form.Control
                type="text"
                placeholder="sacar al otto..."
                onChange={handleChange}
                name="inputValue"
                value={inputValue}
                className="border-secondary"
              />
              <Button
                type="submit"
                variant="outline-success"
                className="border-0 bg-transparent p-0"
                title="Agregar tarea"
              >
                <PlusSquareFill className="text-success" size="40" />
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={9} md={6} className="p-4">
            <div className="d-flex flex-column-reverse justify-content-around">
              <span className="small mb-3 border-bottom border-secondary">
                Total tareas: {arrayTask.length}
              </span>
              <span className="small mb-3 border-bottom border-secondary">
                Realizadas: {arrayTask.length}
              </span>
              <span className="small mb-3 border-bottom border-secondary">
                Pendientes: {arrayTask.length}
              </span>
            </div>
            <ListGroup>
              {arrayTask.map((task, index) => (
                <TaskListItem
                  key={index}
                  task={task}
                  setTask={setTask}
                  index={index}
                  arrayTask={arrayTask}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToDo;
