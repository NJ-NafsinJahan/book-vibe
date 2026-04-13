import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // Component: MainLayout, -----> you can write this also.
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/Books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
