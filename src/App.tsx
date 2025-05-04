import React from "react";
import { Routes, Route } from "react-router";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => (
  <div className="dark bg-background min-h-screen text-foreground">
    <Navbar />
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/anime/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
