import React from "react";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiUserCheck,
  FiTrendingUp,
  FiAward,
  FiFileText,
  FiUsers,
} from "react-icons/fi";

const CareerTips = () => {
  const tips = [
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Resume Writing",
      description:
        "Learn how to craft a resume that stands out from the crowd and gets you noticed by recruiters.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <FiUserCheck className="w-6 h-6" />,
      title: "Interview Prep",
      description:
        "Master the art of interviewing with our proven techniques and common question guides.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description:
        "Strategies to advance your career and move up the ladder in your current organization.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Personal Branding",
      description:
        "Build a strong professional brand that makes you stand out in your industry.",
      color: "bg-info/10 text-info",
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: "Cover Letters",
      description:
        "Write compelling cover letters that complement your resume and get you interviews.",
      color: "bg-success/10 text-success",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Networking",
      description:
        "Effective networking strategies to expand your professional connections.",
      color: "bg-warning/10 text-warning",
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold text-center mb-4">
            Career Development Tips
          </h2>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            Expert advice to help you navigate your career path and achieve
            professional success.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="card-body">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${tip.color}`}
                >
                  {tip.icon}
                </div>
                <h3 className="card-title text-xl mb-2">{tip.title}</h3>
                <p className="text-base-content/70 mb-4">{tip.description}</p>
                <div className="card-actions">
                  <button className="btn btn-ghost btn-sm text-primary">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTips;
