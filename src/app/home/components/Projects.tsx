import { Link } from 'react-router-dom';
import { PinnedItem, useGetPinnedItems } from '../../hooks/getPinnedItems';

function Projects() {
  const { loading, error, pinnedItems } = useGetPinnedItems();

  return (
    <div id="projects" className="md:pt-[88px] md:-mt-24">
      <h2 className="sticky top-0"></h2>
      <div className="pt-8 pb-10 -my-2 group md:py-0">
        {!error &&
          !loading &&
          pinnedItems.map((item: PinnedItem) => (
            <article
              key={item.id}
              className="my-2 transition bg-secondary md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-110"
            >
              <Link
                to={item.url}
                target="_blank"
                className="p-10 block"
                rel="noopener noreferrer"
              >
                <p className="text-xs font-bold tracking-wide uppercase">
                  {item.primaryLanguage.name}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight">
                  {item.name}
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
