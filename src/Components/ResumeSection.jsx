import React from "react";

const ResumeSection = () => {
  // Separate data for education and job experience
  const education = [
    {
      degree: "Master of Business Administration",
      institution: "National University",
      duration: "2020 - 2021",
      CGPA: "2.82",
      Year: "2021",
      description:
        "MBAs can be general or have a specific focus in areas like accounting, finance, marketing, or international business.",
    },
    {
      degree: "Bachelor of Business Administration",
      institution: "National University",
      duration: "2016-2017",
      CGPA: "2.88",
      Year: "2020",
      description:
        "A bachelor's degree in business administration can help you acquire the skills needed to manage a business.",
    },
  ];

  const experience = [
    {
      role: "Sr. Computer Operator",
      company: "Computer Park & It institute",
      duration: "2022 - 2024",
      description:
        "Knowledgeable computer operator effective setting controls and running specific daily tasks. Collaborative and communicative with proven history of quickly fixing minor issues and helping resolve more advanced problems.",
    },
    {
      role: "Chief Executive",
      company: "Bangladesh Computer",
      duration: "2016 - 2022",
      description:
        "Skilled IT professional well-versed in mainframe operations, daily reporting and data management. Adopt at generating reports, documenting changes and updating logs offering 5 years off related experience as a computer operator at Bangladesh Computers. ",
    },
  ];

  return (
    <div className="bg-black w-11/12 mx-auto text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          A summary of <span className="text-orange-500">My Resume</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl text-center font-semibold mb-6">
              My Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-4 bg-base-200 shadow-md rounded-lg mb-4"
              >
                <h4 className="text-xl text-black font-semibold">
                  {edu.degree}
                </h4>
                <p className="text-gray-600">
                  {edu.institution} / {edu.duration}
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  CGPA: {edu.CGPA} / Year: {edu.Year}
                </p>
                <p className="text-gray-500 mt-2 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl text-center font-semibold mb-6">
              My Experience
            </h3>
            {experience.map((job, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg mb-4"
              >
                <h4 className="text-xl text-black font-semibold">{job.role}</h4>
                <p className="text-gray-600">
                  {job.company} / {job.duration}
                </p>
                <p className="text-gray-500 mt-2 text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
            <span className="mr-2">📄</span> Download resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
