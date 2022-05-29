import React from "react";
import { Card } from "react-bootstrap";

const WeatherMainInfo = ({ weather }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Header className="d-flex align-items-center justify-content-around">
        <Card.Title>{weather?.location.name}</Card.Title>
      </Card.Header>
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113944.41875929723!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653598402243!5m2!1ses!2sar`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Card.Body className="text-center">
        <Card.Text>
          <span></span>
          <span>{weather?.current.condition.text}</span>
        </Card.Text>
        <Card.Text>
          <span>{weather?.current.temp_c}°</span>
        </Card.Text>
        <img
          src={`http:${weather?.current.condition.icon}`}
          alt={weather?.current.condition.text}
          width="50px"
        />
      </Card.Body>
      <Card.Footer className="d-flex align-items-center">
        <span>Pais</span>:
          <Card.Subtitle className="m-0 px-2"> {weather?.location.country} </Card.Subtitle>
        </Card.Footer>
    </Card>
  );
};

export default WeatherMainInfo;
