import { useEffect, useState } from "react";
import { fetchProjects } from "../utils/api";
import type { Project } from "../types/project";

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((proj, idx) => (
        <div key={idx} className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-bold">{proj.title}</h2>
          <p>{proj.description}</p>
          <p className="text-sm text-gray-500">{proj.tech_stack}</p>
          <div className="mt-2 flex gap-3 text-blue-600">
            {proj.live_link && <a href={proj.live_link} target="_blank">Live</a>}
            {proj.repo_link && <a href={proj.repo_link} target="_blank">Code</a>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
