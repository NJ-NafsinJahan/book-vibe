import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  console.log(bookParamsId, "bookId");
  const fixedBookId = bookParamsId[1];
  //   const books = use(booksPromise);
  //   console.log(books, "books");

  const books = useLoaderData();
  console.log(books, "books");
  const expectedBook = books.find((book) => book.bookId == fixedBookId);
  console.log(expectedBook, "expected Book");
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto grid grid-cols-2">
      <figure className="w-full flex justify-center items-center bg-gray-300 rounded-2xl p-7 ">
        <img src={image} alt="Album" className="  rounded-2xl h-140 w-80 " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-[40px] text-gray-800">
          {" "}
          {bookName}
        </h2>
        <p className=" font-medium text-[20px] text-gray-600">By :{author}</p>
        <p className="py-2 border-y border-gray-300 font-medium text-[20px] text-gray-600">
          {category}
        </p>
        <p className=" font-semibold text-[16px] text-[#131313]">
          Review :{" "}
          <span className="font-medium text-[16px] text-gray-500">
            {review}
          </span>{" "}
        </p>
        <div className="flex items-center gap-3 mb-4">
          <span className=" font-semibold text-[16px] text-[#131313]">Tag</span>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge badge-soft badge-success text-[#23BE0A] font-medium text-[18px] "
            >
              <p>#{tag}</p>
            </div>
          ))}
        </div>

        <div className="card-actions border-t border-gray-300 grid grid-cols-1 py-3 ">
          <div className="flex gap-10">
            <span className="font-medium text-[16px] text-gray-500">
              Number of pages:{" "}
            </span>{" "}
            <span className=" font-semibold text-[16px] text-[#131313]">
              {totalPages}
            </span>
          </div>
          <div className="flex gap-24">
            <span className="font-medium text-[16px] text-gray-500">
              {" "}
              Publisher:{" "}
            </span>{" "}
            <span className=" font-semibold text-[16px] text-[#131313]">
              {publisher}
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-[16px] text-gray-500">
              Year of Publishing:{" "}
            </span>{" "}
            <span className=" font-semibold text-[16px] text-[#131313]">
              {yearOfPublishing}
            </span>
          </div>
          <div className="flex gap-30">
            <span className="font-medium text-[16px] text-gray-500">
              Rating:{" "}
            </span>{" "}
            <span className=" font-semibold text-[16px] text-[#131313]">
              {rating}
            </span>
          </div>

          {/* button */}
          <div className="flex items-center gap-4 mt-4">
            <button className="btn font-semibold text-[18px]">Read</button>
            <button className="btn bg-[#50B1C9] text-amber-50 font-semibold text-[18px]">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
