import React, { use } from "react";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books");
  return (
    <div className="py-13">
      <h1 className=" text-2xl text-amber-600 font-extrabold text-center">
        AllBooks
      </h1>
    </div>
  );
};

export default AllBooks;
