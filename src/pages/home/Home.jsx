import React from "react";
import Banner from "../../components/homeFiles/Banner";
import TrendingJobs from "../../components/homeFiles/TrendingJobs";

const Home = () => {
  return (
    <div className="space-y-10 md:space-y-16">
      <Banner />
      <TrendingJobs />
    </div>
  );
};

export default Home;
