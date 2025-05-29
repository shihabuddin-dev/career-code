import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaRegStar,
  FaRegHeart,
  FaApple,
  FaAmazon,
} from "react-icons/fa";
import { FiExternalLink, FiDroplet, FiBook } from "react-icons/fi";
import { SiTesla, SiAdobe } from "react-icons/si";

const FeaturedCompanies = () => {
  const companies = [
    {
      id: 1,
      name: "TechNova Solutions",
      icon: <FaApple className="text-red-500" size={32} />,
      industry: "Software Development",
      rating: 4.8,
      jobs: 24,
      featured: true,
      description:
        "Innovative tech company specializing in AI solutions for businesses worldwide.",
    },
    {
      id: 2,
      name: "DesignHub Creative",
      icon: <SiAdobe className="text-pink-500" size={32} />,
      industry: "Design & Marketing",
      rating: 4.6,
      jobs: 12,
      featured: false,
      description:
        "Award-winning design agency creating stunning visuals for global brands.",
    },
    {
      id: 3,
      name: "GreenEarth Energy",
      icon: <SiTesla className="text-emerald-500" size={32} />,
      industry: "Renewable Energy",
      rating: 4.9,
      jobs: 18,
      featured: true,
      description:
        "Pioneering sustainable energy solutions for a cleaner future.",
    },
    {
      id: 4,
      name: "HealthPlus Medical",
      icon: <FiDroplet className="text-blue-500" size={32} />,
      industry: "Healthcare",
      rating: 4.7,
      jobs: 32,
      featured: false,
      description:
        "Leading provider of innovative healthcare services and technology.",
    },
    {
      id: 5,
      name: "FinEdge Capital",
      icon: <FaAmazon className="text-amber-500" size={32} />,
      industry: "Financial Services",
      rating: 4.5,
      jobs: 15,
      featured: true,
      description:
        "Cutting-edge financial solutions for modern businesses and investors.",
    },
    {
      id: 6,
      name: "EduFuture Academy",
      icon: <FiBook className="text-indigo-500" size={32} />,
      industry: "Education Technology",
      rating: 4.8,
      jobs: 9,
      featured: false,
      description:
        "Transforming education through technology and innovative learning methods.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Companies
          </h2>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            Discover top employers actively hiring and offering great
            opportunities
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className={`relative card card-compact shadow-md hover:shadow-xl transition-all duration-300 ${
                company.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="card-body">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-3 ">{company.icon}</div>
                    <div>
                      <h3 className="card-title text-lg font-bold">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <FaBuilding className="text-primary" />
                        <span>{company.industry}</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm btn-square hover:text-red-500">
                    <FaRegHeart className="text-xl" />
                  </button>
                </div>

                <p className="mb-4 text-base-content/80">
                  {company.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="badge badge-primary gap-2">
                      <FaRegStar />
                      {company.rating}
                    </div>
                    <span className="text-sm">
                      {company.jobs} open positions
                    </span>
                  </div>

                  <button className="btn btn-outline btn-sm hover:bg-primary hover:text-white">
                    View Jobs
                    <FiExternalLink className="ml-1" />
                  </button>
                </div>

                {company.featured && (
                  <div className="absolute top-4 right-4 badge badge-primary">
                    Featured
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
