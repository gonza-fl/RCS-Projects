import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { PinAngle } from "react-bootstrap-icons";

const WeatherMainInfo = ({ weather }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localStorageCities = JSON.parse(
      window.localStorage.getItem("favoritesCities")
    );
    localStorageCities && updateFavorites(localStorageCities);
  }, []);

  const updateFavorites = async (localStorageCities) => {
    const cities = localStorageCities.map((city) =>
      fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city.location.name}`
      )
        .then((res) => res.json())
        .then((json) => ({ ...json, favorite: true }))
    );
    setFavorites(await Promise.all(cities));
  };

  const addToFavorite = (city) => {
    const storage = window.localStorage
      .getItem("favoritesCities")
    
    const founded = storage?.includes(city.location.name);
    if (!founded) {
      const newFav = {
        ...city,
        favorite: true,
      };
      window.localStorage.setItem(
        "favoritesCities",
        JSON.stringify([...favorites, newFav])
      );
      setFavorites([...favorites, newFav]);
    }
  };
  const removeToFavorite = () => {};

  return (
    <div className="d-flex justify-content-around">
      {[weather, ...favorites].map((weather, index) => (
        <Card key={index} style={{ width: "18rem" }} className="mt-5">
          <Card.Header className="d-flex align-items-center justify-content-between">
            <Card.Title className="m-0">{weather?.location.name}</Card.Title>
            <Button
              variant="outline-secondary"
              className="p-0"
              title={weather?.favorite ? "Quitar" : "Fijar"}
              onClick={
                weather?.favorite
                  ? () => removeToFavorite(weather)
                  : () => addToFavorite(weather)
              }
            >
              <PinAngle className="p-1" size={25} />
            </Button>
          </Card.Header>
          <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113944.41875929723!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653598402243!5m2!1ses!2sar`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
          <Card.Body className="text-center">
            <Card.Text>
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
          <Card.Footer>
            <div className="d-flex align-items-center justify-content-between">
              <span>Pais:</span>
              <Card.Subtitle className="m-0 px-2">
                {weather?.location.country}
              </Card.Subtitle>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span>Actualizado:</span>
              <Card.Text>{weather?.current.last_updated}</Card.Text>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default WeatherMainInfo;
