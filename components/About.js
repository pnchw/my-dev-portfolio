"use client"

import React, { useRef } from 'react'
import Image from "next/image"
import { motion, useInView } from "framer-motion"

function About() {
    const ref =  useRef(null);
    const isInView = useInView(ref, { once: false });

  return (
    <motion.section 
        id="about" 
        className="select-none max-w-[1200px] mx-auto my-14"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
    >
        <motion.h2 
            className="text-white text-6xl w-fit mx-auto font-semibold p-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            About <span className="text-blue-400">Me</span>
        </motion.h2>
        <div className="grid lg:grid-cols-8 gap-6 px-6 mb-20">
            <motion.div 
                className="w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y:20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-amber-100 to-pink-200 opacity-30 animate-gradient-xy"></div>
                <div className="flex p-6">
                    <motion.div
                        className="flex-none mr-4"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                        transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                    >
                        <Image
                            src={"/assets/cute-icons/avatar.png"}
                            width={50}
                            height={50}
                            alt="about me"
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <motion.h2 
                            className="text-2xl font-bold text-white/80"
                            initial={{ scale: 0.5 }}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-white/70 mt-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.2, duration: 0.4 }}
                        >
                            Aspiring Web Developer with a background in sales and logistics coordinator. 
                            Passionate abour building animate, interactive, and responsive web application. 
                            Self-motivated and continuously learning to enhace coding skills
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y:20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-amber-100 to-pink-200 opacity-30 animate-gradient-xy"></div>
                <div className="flex p-6">
                    <motion.div
                        className="flex-none mr-4"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                        transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                    >
                        <Image
                            src={"/assets/cute-icons/book.png"}
                            width={50}
                            height={35}
                            alt=""
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <motion.h2 
                            className="text-2xl font-bold text-white/80"
                            initial={{ scale: 0.5 }}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                        >
                            Education
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-white/70 mt-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.2, duration: 0.4 }}
                        >
                            Thammasat University <br />
                            Bachelor of Commerce and Accountancy <br />
                            Major in International Business <br />
                            GPA: 3.60
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y:20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-200 via-amber-100 to-pink-200 opacity-30 animate-gradient-xy"></div>
                <div className="flex p-6">
                    <motion.div
                        className="flex-none mr-4"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                        transition={{ delay: 1.0, duration: 0.4, type: "spring" }}
                    >
                        <Image
                            src={"/assets/cute-icons/github.png"}
                            width={50}
                            height={35}
                            alt=""
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <motion.h2 
                            className="text-2xl font-bold text-white/80"
                            initial={{ scale: 0.5 }}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 1.0, duration: 0.4, type: "spring" }}
                        >
                            GitHub
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-white/70 mt-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5, duration: 0.4 }}
                        >
                            My GitHub link: <a href="https://github.com/pnchw" target="_blank" rel="noopener noreferrer">https://github.com/pnchw</a>
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y:20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-amber-100 to-pink-200 opacity-30 animate-gradient-xy"></div>
                <div className="flex p-6">
                    <motion.div 
                    className="flex-none mr-4"
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                    transition={{ delay: 1.0, duration: 0.4, type: "spring" }}
                    >
                        <Image
                            src={"/assets/cute-icons/work.png"}
                            width={50}
                            height={35}
                            alt=""
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <motion.h2 
                            className="text-2xl font-bold text-white/80"
                            initial={{ scale: 0.5 }}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 1.0, duration: 0.4, type: "spring" }}
                        >
                            Experience
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5, duration: 0.4 }}
                        >
                            <div className="flex justify-between text-lg text-white/70 mt-2">
                                <span>Majorette Thailand Co., Ltd.</span>
                                <span>Nov 2021 - Jul 2023</span>
                            </div>
                            <small className="text-lg text-white/70 mt-2 ">
                            Managed and made sure to deliver the right product, quantity, place, and time by coordinating with related departments and subsidiary customers.
                            </small>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default About;