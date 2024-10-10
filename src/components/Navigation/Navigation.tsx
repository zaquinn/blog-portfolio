import { BsFillGridFill } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import "./style.scss";

export default function Navigation() {
  const routes = [
    {
      route: "/projects",
      label: "Projetos",
      icon: BsFillGridFill,
    },
    {
      route: "/about",
      label: "Sobre mim",
      icon: RiProfileFill,
    },
    {
      route: "/blog",
      label: "Blog",
      icon: FaBlog,
    },
  ];

  const pathname = window.location.pathname;

  const activePage = (route: string) => pathname.includes(route);

  return (
    <>
      <div className="navigation">
        {routes.map((route) => (
          <a
            key={route.route}
            className={`navigation-link ${activePage(route.route) ? "navigation-link-active" : ""}`}
            href={route.route}
          >
            <route.icon />
            <span>{route.label}</span>
          </a>
        ))}
      </div>
      <div className="contact">
        <span>Contato</span>
        <a
          href="https://www.linkedin.com/in/isaac-xavier-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="/isaac-xavier.pdf" download>
          Curriculum Vitae
        </a>
        <a
          href="mailto:ayzick120@gmail.com?subject=Ola%20Isaac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/zaquinn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </>
  );
}
