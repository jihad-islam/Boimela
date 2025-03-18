import React from "react";
import BookRow from "./BookRow";

import PropTypes from "prop-types";

function BookList({ searchTerm, books, onFeatureBook }) {
  /*
    const rows = [];
    books.forEach((book) => {
      if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
        return;
      }

      // else condition
      rows.push(
        <BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />
      );
    });
  */

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredBooks.map((book) => (
    <BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />
  ));

  return <div className="space-y-4">{rows}</div>;
}

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};
export default BookList;
