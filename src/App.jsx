import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import RecruitmentPage from "./pages/RecruitmentPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 selection:bg-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
