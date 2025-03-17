import React from "react";

import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";

import { useState } from "react";

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
