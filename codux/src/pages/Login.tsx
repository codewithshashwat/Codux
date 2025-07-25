import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/api";


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(formData);

    if (res.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      alert(res.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
