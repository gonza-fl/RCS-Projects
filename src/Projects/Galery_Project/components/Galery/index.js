import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import getData from "./galeryData";

const Galery = () => {
  const [index, setIndex] = useState(0);
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    start()
  }, []);

  useEffect(() => {
    console.log(galery[0])
  }, [galery]);
  

  const start = async () => {
    const data = await getData();
    setGalery({...data.results});
  }

  const handleChange = (e) => {
    setIndex(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            {
              <Card>
                <Card.Img variant='top'src={galery[0].image}/>
              </Card>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Galery;
