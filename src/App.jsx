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
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/details/:id" element={<ViewBook />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
