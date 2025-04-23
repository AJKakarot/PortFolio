import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      name: "Job Hunt App",
      description: "A job application tracking app built with React and Node.js.",
      repo: "https://github.com/AJKakarot/Job_Portal",
    },
    {
      id: 2,
      name: "TypeScript Learning",
      description: "Practice projects while learning TypeScript.",
      repo: "https://github.com/AJKakarot/TypeScript",
    },
    {
      id: 3,
      name: "Expense Management System",
      description: "A full-stack expense tracker application.",
      repo: "https://github.com/AJKakarot/Expanse-Management-System",
    },
    {
      id: 4,
      name: "Todo App",
      description: "Classic Todo App using Javascript.",
      repo: "https://github.com/AJKakarot/ToDo",
    },
    {
      id: 5,
      name: "E-commerce Website",
      description: "An online store built with MERN stack.",
      repo: "https://github.com/AJKakarot/StudyNotion-Edu-",
    },
    {
      id: 6,
      name: "Blog App",
      description: "A blogging platform using the MERN stack.",
      repo: "https://github.com/AJKakarot/BlogApp",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {projects.map(({ id, name, description, repo }) => (
            <div
              key={id}
              className="rounded-2xl shadow-lg border-2 p-5 transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-2">{name}</h2>
              <p className="text-gray-700 mb-4">{description}</p>
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
