import React from "react";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main">
      <Banner />
      <div className="home__wrapper">
       <Title className="section__title">Shop The Latest</Title> 
       <Link to={"/shop"} className="link">View all</Link>
      </div>
      
      <CardList />
    </main>
  );
};

export default Home;
