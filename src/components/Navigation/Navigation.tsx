import { BsFillGridFill } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiProfileFill } from "react-icons/ri";
import "./style.scss";

export default function Navigation() {
  const routes = [
    {
      route: "/projects",
      label: "Projetos",
      icon: <BsFillGridFill />,
    },
    {
      route: "/contact",
      label: "Contato",
      icon: <IoIosMail />,
    },
    {
      route: "/about",
      label: "Sobre mim",
      icon: <RiProfileFill />,
    },
    {
      route: "/blog",
      label: "Blog",
      icon: <FaBlog />,
    },
  ];

  const activePage = (pathname: string): boolean =>
    window.location.pathname.includes(pathname);

  return (
    <div className="navigation">
      {routes.map((route) => (
        <a
          className={`navigation-link ${activePage(route.route) ? "navigation-link-active" : ""}`}
          href={route.route}
          key={route.route}
        >
          {route.icon}
          <span>{route.label}</span>
        </a>
      ))}
    </div>
  );
}
