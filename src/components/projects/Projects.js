import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MoCha Wallet"
          des="MoCha is a web3 mobile wallet application that revolutionizes financial services, providing secure, real-time blockchain interactions through basic mobile phones. Accessible to all, it empowers users with a seamless, inclusive financial experience."
          src={projectOne}
          gitLink=""
          liveLink="https://www.getmocha.la/"
        />
        <ProjectsCard
          title="Build-Salone E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          gitLink="https://github.com/Eng-Sillah/build-Salone"
          liveLink="https://build-salone.netlify.app/"
        />
        <ProjectsCard
          title="Guess My Number Game"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          gitLink="https://github.com/Eng-Sillah/Guess-My-Number-Game"
          liveLink="https://guess-my-number-by-sillah.netlify.app/"
        />
        <ProjectsCard
          title="Idea Voting Platform"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          gitLink="https://github.com/Eng-Sillah/Ideas-Voting-Platform"
          liveLink="https://idea-voting-platform.netlify.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects