"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, animate, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2025,
    title: "Facebook clone with HTML and CSS",
    description:
      "A static Facebook UI replica using only HTML & CSS, focusing on pixel-perfect layout and responsive design. Strengthen my skills in CSS Flexbox and positioning techniques to recreate a familiar social media experience.",
    src: "/assets/project1.png",
  },
  {
    id: 2,
    year: 2025,
    title: "Facebook clone with Next.js and Tailwind CSS",
    description:
      "A dynamic Facebook-like app built with Next.js and Tailwind CSS. Features authentication (NextAuth), real-time posts, modals, and dropdowns using Firebase",
    src: "/assets/project2.png",
  },
  {
    id: 3,
    year: 2025,
    title: "My Portfolio Website",
    description: "A dynamic and animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    src: "/assets/project3.jpg",
  },
];

const colors_top = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(colors_top[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false})

  useEffect(() => {
    animate(color, colors_top, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section id="portfolio" ref={ref} className="select-none py-32 text-white" style={{ backgroundImage }}>
      <div className="container mx-auto grid lg:grid-cols-8">

        <div className="mr-12 mb-12 md:mb-0 lg:col-span-3">
          <motion.h2 
            className="text-6xl mb-10 font-bold sticky top-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8}}
          >
            My <span className="text-blue-400">Projects</span>
          </motion.h2>
        </div>

        {/* project list */}
        <div className="lg:col-span-5">
          {projects.map((project, index) => (
          <motion.div
            className="cursor-pointer mb-8 group"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y:50 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
            <h3
              className={`text-3xl font-semibold group-hover:text-blue-400 transition-colors 
                        ${selectedProject.id === project.id ? "text-blue-200" : "text-gray-500"} duration-300`}
            >
              {project.title}
            </h3>

            {/* underline effect */}
            {selectedProject.id === project.id && (
              <div className="border-b-2 border-blue-200 my-4"></div>
            )}

            {/* description */}
            {selectedProject.id === project.id && (
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {project.description}
              </motion.p>
            )}
          </motion.div>
          ))}
        

            {/* selected image project with fading in-out effect */}
            <motion.div
              className="mt-20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut"}}
            >
              <Image
                className="my-auto rounded-xl shadow-lg"
                src={selectedProject.src}
                width={800}
                height={450}
                alt={selectedProject.title}
                unoptimized={true}
              />
            </motion.div>
          </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;