import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/:${book.bookId}`}
      className="card bg-base-100 shadow-sm border border-gray-100"
    >
      <div className=" p-5  ">
        <figure className="p-6 bg-base-300 rounded-2xl">
          <img className="rounded-xl h-55" src={book.image} alt="" />
        </figure>
      </div>
      <div className="card-body">
        <div className="flex items-center gap-4">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge badge-soft badge-success text-[#23BE0A] font-medium text-[18px] "
            >
              {tag}
            </div>
          ))}
        </div>

        <h2 className="font-bold text-[24px] text-[#131313]/70">
          {" "}
          {book.bookName}
        </h2>

        <p className="font-normal text-[16px] text-[#131313]/70">
          {book.author}
        </p>

        <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-4">
          <div className="font-normal text-[18px] text-[#131313]/70 ">
            {book.category}
          </div>
          <div className="font-normal text-[18px] text-[#131313]/70 flex items-center gap-3">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
