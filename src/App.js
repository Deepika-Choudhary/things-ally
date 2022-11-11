import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchEngine } from "./components/SearchEngine";
import { Home } from "./components/Home";
import { TopSale } from "./components/TopSale";
import { Footer } from "./components/Footer";
import { AllProducts } from "./components/AllProducts";

import ListPage from "./components/ListPage";
import { getPosts } from "./components/api/api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <SearchEngine /> */}
      <>
        <SearchEngine posts={posts} setSearchResults={setSearchResults} />
        <ListPage searchResults={searchResults} />
      </>
      <Home />
      <TopSale />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default App;
