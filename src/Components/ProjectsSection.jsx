import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Serve-Together",
    description:
      "a user-friendly platform for volunteer management where a user can create a volunteer need post, update and delete a post, and a user can be a volunteer for others post.",
    image: "https://i.ibb.co.com/dpzprY0/Serve-Togather.png",
    githubLink: "https://github.com/Maptaul/ServeTogether-clinet",
    liveLink: "https://servetogether-e28be.web.app/#",
  },
  {
    title: "Gamelense",
    description:
      "Chill Gamer, a user-friendly game review application. The goal of this project is to design a platform where users can explore and share game reviews. Users can also create, update, and delete their reviews.",
    image: "https://i.ibb.co.com/4gv3hjg/Game-Lense.png",
    githubLink: "https://github.com/Maptaul/Game-lense-client",
    liveLink: "https://gamelense-fc12c.web.app/",
  },
  {
    title: "Bangla Voucher",
    description:
      "Discount PRO is a Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops in Bangladesh. ",
    image: "https://i.ibb.co.com/ScX4LjH/Bangla-Cocuher.png",
    githubLink: "https://github.com/Maptaul/BanglaVoucher",
    liveLink: "https://banglavoucher.web.app/#slide2",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-black w-11/12 mx-auto text-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-500">My Projects</h2>
        <p className="text-gray-400 mt-4">
          Explore some of the projects I have worked on. Each project includes
          links to the live version and source code.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
