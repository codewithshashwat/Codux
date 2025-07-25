import { type LoginUser, type SignupUser } from "../types/user";
import { type SubmitProject } from "../types/project";

const BASE_URL = "http://localhost:8000/api";

// ----------------- AUTH -----------------

export const login = async (user: LoginUser) => {
  const res = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Login failed");
  return await res.json(); // should return token
};

export const signup = async (user: SignupUser) => {
  const res = await fetch(`${BASE_URL}/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Signup failed");
  return await res.json(); // should return token or success
};

// ----------------- PROJECTS -----------------

export const fetchProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects/`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return await res.json(); // array of Project[]
};

export const submitProject = async (project: SubmitProject) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/projects/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(project),
  });

  if (!res.ok) throw new Error("Project submission failed");
  return await res.json(); // submitted project
};
