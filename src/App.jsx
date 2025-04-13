import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import Card from "./components/Card";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero
        title={"Become a React Dev"}
        subTitle={"Find the React job that fits your skills and needs"}
      />
      <HomeCard />
      <Card />
      <JobListing />
      <ViewAllJobs />
    </div>
  );
}

export default App;
