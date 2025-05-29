import React from "react";
import Banner from "../../components/homeFiles/Banner";
import TrendingJobs from "../../components/homeFiles/TrendingJobs";
import CareerTips from "../../components/homeFiles/CareerTips";
import FeaturedCompanies from "../../components/homeFiles/FeaturedCompanies";

const Home = () => {
  return (
    <div className="space-y-10 md:space-y-16">
      <Banner />
      <TrendingJobs />
      <CareerTips />
      <FeaturedCompanies />
    </div>
  );
};

export default Home;
