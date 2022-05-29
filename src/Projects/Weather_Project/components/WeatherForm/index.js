import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const WeatherForm = ({ changeCity }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeCity(city);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl type="text" onChange={handleChange} />
    </Form>
  );
};

export default WeatherForm;
