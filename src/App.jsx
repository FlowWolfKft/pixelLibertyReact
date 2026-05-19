import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Impressum from "./pages/Impressum";
import QuoteRequest from "./pages/QuoteRequest";
import CookieBanner from "./components/CookieBanner";
import ScrollToHash from "./components/ScrollToHash";
import React from "react";

function App() {
  return (
    
      <><ScrollToHash />
    <CookieBanner />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="impressum" element={<Impressum />} />
<Route path="ajanlatkeres" element={<QuoteRequest />} />
      </Route>
    </Routes> </>
  );
}

export default App;
