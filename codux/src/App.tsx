import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  { path: "/", element: <><Navbar /><Home /></> },
  { path: "/submit", element: <><Navbar /><Submit /></> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
