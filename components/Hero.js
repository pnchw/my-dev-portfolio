"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

// const colors_top = ["#92ccdd", "#c7eff0", "#f5d5fd", "#fdc4ec", "#ffc2cb"];
const colors_top = ["#B7B1F2", "1E3E62", "#FDB7EA", "#FFDCCC", "#FBF3B9", "#73C7C7"];

function Hero() {
    const color = useMotionValue(colors_top[0]);

    useEffect(() => {
        animate(color, colors_top, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 40%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
        style={{backgroundImage}}
        className="select-none relative grid min-h-screen place-content-center overflow-hidden px-4 py-4 text-white"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-3 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            Open for work
        </span>
        <h1 className="text-white/70 text-3xl md:text-5xl font-black">Hi! I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-blue-300 bg-clip-text font-black leading-tight text-transparent
            text-3xl md:text-5xl">
            Pancheewa Thapom
        </h1>
        <Image
            src={"/assets/profile-pic.png"}
            width={250}
            height={250}
            alt="profile picture"
        />

        <div className="flex justify-center items-center bg-white/10 shadow-xl p-3 space-x-3 mt-4 rounded-3xl">
            <p>Welcome to my Portfolio</p><FaRegFaceSmileBeam className="text-yellow-500"/>
        </div>

        <p className="my-6 max-w-xl text-center">He who conquers himself is the mightiest warrior.</p>

        <motion.button
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 1 }}
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/pancheewa-resume-webdev.pdf"
              link.download = "pancheewa_resume.pdf"
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
        >
          Download Resume
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>

      <motion.div
        className="hidden md:block absolute left-[120px] top-[40%] z-2000"
        drag
      >
        <Image
          src={"/assets/cute-icons/panda.png"}
          width={150}
          height={150}
          alt="cute-panda"
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute right-[120px] top-[40%] z-2000"
        drag
      >
        <Image
          src={"/assets/cute-icons/chick.png"}
          width={150}
          height={150}
          alt="cute-panda"
          draggable="false"
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;