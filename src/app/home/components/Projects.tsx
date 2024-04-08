import { Link } from 'react-router-dom';
import { PinnedItem, useGetPinnedItems } from '../../hooks/getPinnedItems';
import { BsFillStarFill as Star } from 'react-icons/bs';
import Project from '../../../components/Loading/Project';
import { useIntersectionObserver } from 'usehooks-ts';
import { useEffect } from 'react';
import { useActiveLinkStore } from '../store/activeLink';
function Projects() {
  const { loading, error, pinnedItems } = useGetPinnedItems();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    initialIsIntersecting: true,
  });
  const { setActiveLink } = useActiveLinkStore((state) => state);
  useEffect(() => {
    if (isIntersecting) {
      setActiveLink('projects');
    }
  }, [isIntersecting, setActiveLink]);

  return (
    <div id='projects' className='md:pt-[88px] md:-mt-24'>
      <h2 className='sticky top-0'></h2>
      <div className='pt-8 pb-10 -my-2 group md:py-0' ref={ref}>
        {loading
          ? Array.from({ length: 6 }).map((_, idx: number) => <Project key={idx} />)
          : !error &&
            !loading &&
            pinnedItems.map((item: PinnedItem) => (
              <article
                key={item.id}
                className='my-2 transition bg-secondary md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-110'
              >
                <Link to={item.url} target='_blank' className='p-10 block' rel='noopener noreferrer'>
                  <p className='text-xs font-bold tracking-wide uppercase'>{item.primaryLanguage.name}</p>
                  <h3 className='mt-2 text-[24px] font-semibold leading-tight text-grey'>{item.name}</h3>
                  <p className='mt-2 text-grey'>{item.description ?? 'lorem ipsum sir dolot amet'}</p>
                  <div className='flex items-center mt-4 text-grey'>
                    <div className='w-4 h-4 p-[2px] mr-1'>
                      <Star className='fill-current -mt-px w-full h-full' />
                    </div>
                    <span className='-mt-px text-xs font-semibold leading-none tracking-wide'>
                      {item.stargazerCount}
                      <span className='sr-only'>stars</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
      </div>
    </div>
  );
}

export default Projects;
