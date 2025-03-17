import React from "react";
import { Star } from "lucide-react";
import PropTypes from "prop-types";

function FeatureBook({ book, onFeatureBook }) {
  return (
    <button onClick={() => onFeatureBook(book.id)}>
      <Star color={book.featured ? "Green" : "Black"} />
    </button>
  );
}

FeatureBook.PropTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default FeatureBook;
