import React from "react";
import { FaRegLightbulb, FaRegSmile } from "react-icons/fa";

const SuccessStories = () => {
  const stories = [
    {
      name: "Abdur Rahman",
      role: "Frontend Developer",
      story:
        "I landed my dream job within two weeks of using Career Code! The application process was smooth and the tips section really helped me prepare for interviews.",
      icon: <FaRegSmile className="text-primary text-2xl" />,
    },
    {
      name: "Tanvir Hasan",
      role: "UI/UX Designer",
      story:
        "The Featured Companies section connected me with top recruiters. I received multiple offers and found the perfect fit for my skills.",
      icon: <FaRegLightbulb className="text-secondary text-2xl" />,
    },
  ];

  return (
    <section className="bg-base-100 rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Success Stories
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((s, i) => (
          <div
            key={i}
            className="card card-compact bg-base-200 border border-primary/10 p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3">
              {s.icon}
              <div>
                <div className="font-semibold text-base-content text-lg">
                  {s.name}
                </div>
                <div className="text-xs text-base-content/60">{s.role}</div>
              </div>
            </div>
            <p className="text-base-content/80 italic mb-4">“{s.story}”</p>
            <div className="absolute bottom-0 right-0 opacity-10 text-[6rem] pointer-events-none select-none">
              {s.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
