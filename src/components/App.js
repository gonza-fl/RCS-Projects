import React, { useEffect, useState } from "react";
import Book from "./Book";
import getData from "../helpers/data";

const App = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getBooks()
  },[]);
    
  const getBooks = async () => {
    const newBook = await getData();
    setBook(newBook)
  }

  return (
    <>
      <Book books={book.data} />
    </>
  );
};

export default App;
