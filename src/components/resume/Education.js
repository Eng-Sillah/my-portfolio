import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering With Multimedia"
            subTitle="Limkokwing University of Creative Technology (2019 - 2023)"
            result="3.90/4"
            des="As a graduate in Software Engineering with Multimedia from Limkokwing University of Creative Technology, I am equipped with a diverse skill set that spans both the technical and creative realms of software development"
          />
          <ResumeCard
            title="West Africa  Senior School Certificate Examination (WASSCE)"
            subTitle="Grace School of Science (2013 - 2016)"
            result="8 Credits"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Basic Education Certificate Examination (B.E.C.E)"
            subTitle="Yengema Secondary School (Y.S.S) Kono (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern Engineer"
            subTitle="Christex Foundation - (2023 - Present)"
            result="Sierra Leone"
            des="I had the privilege of beign part of the MoCha App engineering team during my internship, where my primary responsibility was to contribute to the development of the USSD integration. The key tasks assigned to me include, USSd MenuDevelopment, write and optimized code to seamlessly integrate the USSD Menu, scope the MVP."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Sierra Coding Academy - (2021 - 2022)"
            result="Freetown"
            des="Developing and designing responsive and dynamic websities"
          />

          <ResumeCard
            title="Database Administrator"
            subTitle="BaTach Priority One Company Ltd - (2019 - 2021)"
            result="Freetown"
            des="My responsibilities includes designing and implementing efficient database systems, ensuring data integrity , optimizing performance, and maintaining robust security measures to safeguard sensitive information."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education