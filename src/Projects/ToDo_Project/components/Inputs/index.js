import React, { useState, useEffect } from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";

function TaskListItem({ arrayTask, setTask, index, task }) {
  const [inputEdit, setInputEdit] = useState({
    inputValue: task,
    isReadOnly: true,
  });

  const handleChangeEdit = (e) => {
    setInputEdit({ ...inputEdit, inputValue: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      const newArray = arrayTask;
      const value = inputEdit.inputValue?.trim()
      newArray.splice(index, 1, value)
      console.log(newArray)
      value &&
      setTask(newArray);
      setInputEdit({ ...inputEdit, isReadOnly: true })
    }
  };

  const handleDelete = (index) => {
    const newArrayTask = arrayTask.filter((_, i) => i !== index);
    setTask(newArrayTask);
  };

  return (
    <ListGroupItem className="d-flex justify-content-between">
      <input
        className="EditInput border-0 p-0"
        name="inputValue"
        type="text"
        value={inputEdit.inputValue}
        onChange={handleChangeEdit}
        readOnly={inputEdit.isReadOnly}
        onDoubleClick={() =>
          setInputEdit({ ...inputEdit, isReadOnly: false })
        }
        onKeyPress={handleKeyPress}
      />
      <Button
        className="text-danger d-flex bg-transparent p-0 border-0 rounded-circle"
        title="Eliminar tarea"
      >
        <XCircleFill
          type="button"
          onClick={() => handleDelete(index)}
          title="Eliminar tarea"
          size="20"
        />
      </Button>
    </ListGroupItem>
  );
}

export default TaskListItem;
