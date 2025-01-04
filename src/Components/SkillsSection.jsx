import React from "react";

const SkillsSection = () => {
  // Array of skill objects with their name and corresponding icon (URL or class name for icons)
  const skills = [
    { name: "HTML", icon: "https://i.ibb.co.com/v4JpKRk/html.png" },
    { name: "JavaScript", icon: "https://i.ibb.co.com/hfbGTN1/java.png" },
    { name: "CSS", icon: "https://i.ibb.co.com/5r22m4D/css.png" },
    { name: "React", icon: "https://i.ibb.co.com/7v947Qj/react.png" },
    { name: "Node.js", icon: "https://i.ibb.co.com/7G1cFtb/nodejs.webp" },
    { name: "Express", icon: "https://i.ibb.co.com/2y6zgCT/express.jpg" },
    { name: "Tailwind CSS", icon: "https://i.ibb.co.com/Y3dtGhd/tailwing.png" },
    { name: "MongoDB", icon: "https://i.ibb.co.com/4jX679Y/mongodb.png" },
    { name: "Git", icon: "https://i.ibb.co.com/tbrpM62/git.png" },
    {
      name: "GitHub",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
  ];

  return (
    <div className="bg-black w-11/12 mx-auto text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-4">
          Skills
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Proficient in HTML, CSS, JavaScript, and React.js, I specialize in
          creating responsive and visually stunning web applications. <br />{" "}
          With a strong foundation in UI/UX design and modern development tools,
          I bring ideas to life with precision and creativity.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-32 h-32 mb-2 rounded-md"
              />
              <p className="text-sm font-medium">{skill?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
