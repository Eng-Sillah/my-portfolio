import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern Engineer"
            subTitle="Christex Foundation - (2023 - Present)"
            result="Sierra Leone"
            des="I had the privilege of beign part of the MoCha App engineering team during my internship, where my primary responsibility was to contribute to the development of the USSD integration. The key tasks assigned to me include, USSd MenuDevelopment, write and optimized code to seamlessly integrate the USSD Menu, scope the MVP."
          />
          <ResumeCard
            title="Intern Engineer"
            subTitle="Christex Foundation - (2023 - Present)"
            result="Sierra Leone"
            des="I had the privilege of beign part of the MoCha App engineering team during my internship, where my primary responsibility was to contribute to the development of the USSD integration. The key tasks assigned to me include, USSd MenuDevelopment, write and optimized code to seamlessly integrate the USSD Menu, scope the MVP."
          />
          <ResumeCard
            title="Intern Engineer"
            subTitle="Christex Foundation - (2023 - Present)"
            result="Sierra Leone"
            des="I had the privilege of beign part of the MoCha App engineering team during my internship, where my primary responsibility was to contribute to the development of the USSD integration. The key tasks assigned to me include, USSd MenuDevelopment, write and optimized code to seamlessly integrate the USSD Menu, scope the MVP."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior React Dev Training"
            subTitle="Christex foundation (2023 - Present)"
            result="Freetown"
            des="I had the privilege of beign part of the MoCha App engineering team during my internship, where my primary responsibility was to contribute to the development of the USSD integration. The key tasks assigned to me include, USSd MenuDevelopment, write and optimized code to seamlessly integrate the USSD Menu, scope the MVP."
          />
          <ResumeCard
            title="Senior React Dev Training"
            subTitle="Christex foundation (2023 - Present)"
            result="Freetown"
            des="I had the privilege of beign part of the MoCha App engineering team during my internship, where my primary responsibility was to contribute to the development of the USSD integration. The key tasks assigned to me include, USSd MenuDevelopment, write and optimized code to seamlessly integrate the USSD Menu, scope the MVP."
          />
          <ResumeCard
            title="Senior React Dev Training"
            subTitle="Christex foundation (2023 - Present)"
            result="Freetown"
            des="Practicing React and Next.Js"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
