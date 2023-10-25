import Bio from './components/Bio';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';

function Home() {
  return (
    <div>
      <div className="static flex flex-col justify-between w-full p-6 sm:p-8 md:max-w-[496px] md:fixed md:h-screen lg:py-[88px] lg:pl-[88px] md:pr-18 lg:pr-0">
        <div className="flex flex-col">
          <Bio />
          <Nav />
        </div>
        <div className="flex items-center mt-8 md:mt-[72px] w-full  ">
          <Socials />
        </div>
      </div>
      <div className="static p-6 sm:p-8 md:max-w-[536px] lg:max-w-[736px] md:absolute md:right-0 lg:py-[88px] lg:pr-[88px] md:pl-0">
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default Home;
