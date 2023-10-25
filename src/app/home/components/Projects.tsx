import { useMemo } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const arr = useMemo(() => Array.from({ length: 5 }), []);
  return (
    <div id="projects" className="md:pt-[88px] md:-mt-24">
      <h2 className="sticky top-0"></h2>
      <div className="pt-8 pb-10 -my-2 group md:py-0">
        {arr.map((_, idx) => (
          <article
            key={idx}
            className="my-2 transition bg-slate-500 md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-110"
          >
            <Link
              to="https://google.com"
              target="_blank"
              className="p-10 block"
              rel="noopener noreferrer"
            >
              <p className="text-xs font-bold tracking-wide uppercase">
                Typescript
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-tight">
                Somthing
              </h3>
              <p className="mt-2">lorem ipsum sir dolot amet</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
