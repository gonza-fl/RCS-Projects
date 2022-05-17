import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";

const Book = ({ books }) => {
  return (
    <Container className="w-100 d-flex" style={{height:'800px'}}>
      <Row>
        {books &&
          books.map((book, index) => {
            return (
              <Col className='mt-4' key={index}>
                <Card style={{ width: "18rem" }} key={index}>
                  <Card.Img variant="top" src={book.image} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                    <Card.Footer>{book.author}</Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Book;
