import React from "react";
import Banner from "../../components/homeFiles/Banner";
import TrendingJobs from "../../components/homeFiles/TrendingJobs";
import CareerTips from "../../components/homeFiles/CareerTips";
import FeaturedCompanies from "../../components/homeFiles/FeaturedCompanies";
import SuccessStories from "../../components/homeFiles/SuccessStories";

const Home = () => {
  return (
    <div className="space-y-10 md:space-y-16">
      <Banner />
      <TrendingJobs />
      <CareerTips />
      <FeaturedCompanies />
      <SuccessStories />
    </div>
  );
};

export default Home;
