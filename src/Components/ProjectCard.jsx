import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-t-lg h-56 w-full"
        />
        {/* Hover Overlay with Live Link */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-t-lg">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            View Live
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="card-body text-left p-4">
        <h3 className="card-title text-xl font-semibold text-orange-500">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-evenly mt-4">
          <button className="btn btn-outline btn-sm">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              GitHub
            </a>
          </button>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Live
          </a>
          <button className="btn btn-secondary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
