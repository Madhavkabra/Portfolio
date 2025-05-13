import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Blogs from "../components/Blogs";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/ResumeNew";
import Experience from "../components/Experience/Experience";
import Consultation from "../components/Consultation/Consultation";
import BlogDetail from "../components/Blogs/BlogDetail";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "project", element: <Projects /> },
      { path: "consultation", element: <Consultation /> },
      { path: "experience", element: <Experience /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:slug", element: <BlogDetail /> },
      { path: "resume", element: <Resume /> },
      { path: "*", element: <Home /> },
    ],
  },
];

export default createBrowserRouter(routes);
