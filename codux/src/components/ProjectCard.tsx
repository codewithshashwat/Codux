import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { type Project } from "../types/project";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg">
      {/* Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {project.title}
        </h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
            <span
              key={idx}
              className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-4">
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center gap-1 text-gray-700 hover:text-black"
          >
            <FaGithub /> GitHub
          </a>

          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-gray-700 hover:text-black"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>

        {/* View Detail (Optional) */}
        <Link
          to={`/project/${project.id}`}
          className="block mt-4 text-indigo-600 hover:underline text-sm"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
