import React from "react";
import { useState } from "react";

import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";

const BOOKS = [
  {
    id: 1,
    title: "Opekkha",
    author: "Humayun Ahmed",
    featured: false,
  },
  {
    id: 2,
    title: "Harry Potter",
    author: "J.K. Rowling",
    featured: false,
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    featured: false,
  },
  {
    id: 4,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    featured: false,
  },
  {
    id: 5,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    featured: false,
  },
];

function Boimela() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(BOOKS);

  /*
    1. here map iterating each object of the books array and store single object in book, then spread operator copy that object from book and then update that book.featured if condition match. then setBooks useState er books ke update kore dey.
    
    2. book.id === id ? (book.featured = !book.featured) : book; eta evabew kora jeto but tokhon r immutable hoto na. but react always immutable prefer kore. tai spread operator use kora hoy.

  */
  const toggleFeatured = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, featured: !book.featured } : book
      )
    );
  };

  console.log(books);
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList
        searchTerm={searchTerm}
        books={books}
        onFeatureBook={toggleFeatured}
      />
    </div>
  );
}

export default Boimela;
