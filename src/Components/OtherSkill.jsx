import React from "react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Transforming your ideas into interactive and visually appealing websites. I specialize in HTML5, CSS3, JavaScript, and React.js to build responsive, high-performance web applications that work seamlessly across devices.",
    icon: "https://i.ibb.co.com/Bgw9rkh/front.jpg", // Replace with actual icon URL
  },

  {
    title: "Responsive Design",
    description:
      "Crafting designs that adapt perfectly to any screen size, ensuring an exceptional user experience across devices.",
    icon: "https://i.ibb.co.com/7gd6Mcj/resonsibe.png",
  },
];

const OtherSkill = () => {
  return (
    <section className="bg-black w-11/12 mx-auto text-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-500">Others Skills</h2>
        <p className="text-gray-400 mt-4">
          Offering bespoke frontend development and UI/UX design services, I
          specialize in creating responsive, <br /> user-friendly websites that
          bring your vision to life. Whether you need a simple landing page or a
          complex web application, <br /> I deliver high-quality, tailored
          solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="card-body items-start grid md:grid-cols-1  gap-4 p-6">
              <div className="flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.title} Icon`}
                  className="h-60 w-full items-center justify-center rounded-md"
                />
              </div>
              <div>
                <h3 className="card-title text-xl font-semibold text-orange-500">
                  {skill.title}
                </h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherSkill;
