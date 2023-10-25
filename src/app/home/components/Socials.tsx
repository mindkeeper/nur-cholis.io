import image from '../../../assets/images/image.jpg';
import { useMemo } from 'react';

import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import { RiShareBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

interface SocialList {
  label: string;
  link: string;
  icon: JSX.Element;
}

export default function Socials() {
  const socialList: SocialList[] = useMemo(
    () => [
      {
        label: 'Twitter',
        link: 'https://twitter.com/nrchlsm',
        icon: <FaXTwitter />,
      },
      {
        label: 'Github',
        link: 'https://github.com/mindkeeper',
        icon: <FaGithub />,
      },
    ],
    []
  );
  return (
    <>
      <div className="w-12 h-12 mr-8 rounded-full">
        <img
          src={image}
          alt="Nur Cholis Majid"
          className="w-full h-full rounded-full"
        />
      </div>
      <ul className="flex -mx-4">
        {socialList.map((social, idx) => (
          <li key={idx} className="mx-4">
            <Link to={social.link} className="flex items-center">
              <div className="w-4 h-4 mr-4">{social.icon}</div>
              <span className="mt-px">{social.label}</span>
              <div className="p-[2px] w-4 ml-2">
                <RiShareBoxLine />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
