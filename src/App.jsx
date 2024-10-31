import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ViewBook from "./pages/ViewBook";

const App = () => {
  return (
    <Routes>
      <Route path="/books/create" elements={<CreateBook />} />
      <Route path="/books/edit/:id" elements={<EditBook />} />
      <Route path="/books/delete/:id" elements={<DeleteBook />} />
      <Route path="/books/details/:id" elements={<ViewBook />} />
      <Route path="/" elements={<Home />} />
    </Routes>
  );
};

export default App;
