import React from "react";
import Products from "../Products/Products";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <Header/>
      <SearchBar/>
      <Products/>
    </div>
  );
};

export default Home;
