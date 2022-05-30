import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherForm from "../WeatherForm";
import WeatherMainInfo from "../WeatherMainInfo";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Clima | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "Tucuman") => {
    const storage = window.localStorage.getItem("favoritesCities");
    const founded = storage?.includes(city);
    if (!founded) {
      //in progress
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      ).then((res) => res.json());
      setWeather(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Clima App</h1>
            <WeatherForm changeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather} reLoadInfo={loadInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WeatherApp;
