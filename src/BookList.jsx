import React from "react";
import BookRow from "./BookRow";

// books list
const BOOKS = [
  {
    id: 1,
    title: "অপেক্ষা",
    author: "হুমায়ূন আহমেদ",
    featured: true,
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
    featured: true,
  },
  {
    id: 5,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    featured: false,
  },
];

// ekhn ei boi gulare bookrow te pass korbo. map,foreach, array er concept lagbe
// ekhane props er concept lagbe. props er maddhome ekta component theke arekta component e data pass kora jay. data pass unidirectional. parents to child.

function BookList() {
  return (
    <ul className="space-y-4">
      {BOOKS.map(
        (
          book // ekhane book holo prop er nam.
        ) => (
          // jokhon ami iterate kore kono list banaite chai react e always key declare korte hoy. key hobe kono ekta unique value. ekhane book.id unique value.
          // key na dile react warning dibe. ei key er maddhome react ei li ke identify kore.
          <li
            key={book.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
          >
            <BookRow book={book} />
          </li>
        )
      )}
    </ul>
  );
}

export default BookList;
