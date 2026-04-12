import React, { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books");
  return (
    <div className="py-13 container mx-auto ">
      <h1 className=" text-4xl text-[#131313]/75 font-bold text-center mb-6">
        Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
