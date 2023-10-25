import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface LinkProps {
  label: string;
  link: string;
  target: string;
}

function Nav() {
  const links: LinkProps[] = useMemo(
    () => [
      { label: "Projects", link: "#projects", target: "projects" },
      { label: "Skills", link: "#skills", target: "skills" },
    ],
    []
  );

  const location = useLocation();

  const handleScroll = useCallback((target: string) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="mt-[72px] hidden text-sm font-bold uppercase md:block">
      <ul className="mt-[72px] hidden text-sm font-bold uppercase md:block">
        {links.map((item, idx) => {
          const isActive = item.link === location.hash;
          return (
            <li key={item.label} className="md:my-4">
              <NavLink
                to={item.link}
                className={clsx(
                  "group inline-flex items-center transition hover:text-white",
                  isActive ? "text-white font-bold" : "text-grey"
                )}
                onClick={() => handleScroll(item.target)}
              >
                <span className="text-xs tracking-wide">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <span
                  className={clsx(
                    "mx-4 -mt-px inline-block w-6 group-hover:w-10 group-hover:bg-white",
                    isActive ? "bg-white h-1 !w-10" : "bg-grey h-px"
                  )}
                ></span>
                <span className="text-xs uppercase tracking-widest">
                  {item.label}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
