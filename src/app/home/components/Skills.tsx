import clsx from "clsx";
import { useMemo } from "react";

function Skills() {
  const data = useMemo(() => Array.from({ length: 10 }), []);
  return (
    <div className="md:pt-[88px]" id="skills">
      <div className="flex flex-wrap pt-8 pb-10 -my-1 md:-m-1 group md:py-0 ">
        {data.map((_, idx) => (
          <article
            key={idx}
            className={clsx(
              " flex-none w-full my-1 md:m-1 md:w-60 md:min-h-[240px] lg:w-80 lg:min-h-[320px]",
              idx % 2 == 0 ? "md:-translate-y-[29px]" : ""
            )}
          >
            <div className="bg-slate-500 flex flex-col justify-between w-full h-full p-10 transition min-h-inherit md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-110">
              <p className="text-xs font-bold tracking-widest uppercase">
                Skill {idx + 1}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skills;
