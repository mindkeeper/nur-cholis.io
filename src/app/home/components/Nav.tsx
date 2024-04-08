import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useActiveLinkStore } from '../store/activeLink';

interface LinkProps {
  label: string;
  link: string;
  target: string;
}

function Nav() {
  const links: LinkProps[] = useMemo(
    () => [
      { label: 'Projects', link: '#projects', target: 'projects' },
      { label: 'Skills', link: '#skills', target: 'skills' },
    ],
    []
  );

  const { activeLink, setActiveLink } = useActiveLinkStore((state) => state);

  const handleScroll = useCallback(
    (target: string) => {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        setActiveLink(target);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [setActiveLink]
  );

  return (
    <nav className='mt-[72px] hidden text-sm font-bold uppercase md:block'>
      <ul className='mt-[72px] hidden text-sm font-bold uppercase md:block'>
        {links.map((item, idx) => {
          return (
            <li key={item.label} className='md:my-4'>
              <NavLink
                to={item.link}
                className={clsx(
                  'group inline-flex items-center transition hover:text-white',
                  activeLink === item.target ? 'text-white font-bold' : 'text-grey'
                )}
                onClick={() => handleScroll(item.target)}
              >
                <span className='text-xs tracking-wide'>{(idx + 1).toString().padStart(2, '0')}</span>
                <span
                  className={clsx(
                    'mx-4 -mt-px inline-block w-6 group-hover:w-10 group-hover:bg-white',
                    activeLink === item.target ? 'bg-white h-1 !w-10' : 'bg-grey h-px'
                  )}
                ></span>
                <span className='text-xs uppercase tracking-widest'>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
