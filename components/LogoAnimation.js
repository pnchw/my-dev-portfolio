"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    { src: "/assets/cute-icons/kitty.png", alt: "kitty" },
    { src: "/assets/cute-icons/kitty1.png", alt: "kitty1" },
    { src: "/assets/cute-icons/kitty2.png", alt: "kitty2" },
    { src: "/assets/cute-icons/kitty3.png", alt: "kitty3" },
    { src: "/assets/cute-icons/kitty4.png", alt: "kitty4" },
    { src: "/assets/cute-icons/kitty5.png", alt: "kitty5" },
    { src: "/assets/cute-icons/kitty6.png", alt: "kitty6" },
    { src: "/assets/cute-icons/kitty7.png", alt: "kitty7" },
    { src: "/assets/cute-icons/kitty.png", alt: "kitty" },
    { src: "/assets/cute-icons/kitty1.png", alt: "kitty1" },
    { src: "/assets/cute-icons/kitty2.png", alt: "kitty2" },
    { src: "/assets/cute-icons/kitty3.png", alt: "kitty3" },
    { src: "/assets/cute-icons/kitty4.png", alt: "kitty4" },
    { src: "/assets/cute-icons/kitty5.png", alt: "kitty5" },
    { src: "/assets/cute-icons/kitty6.png", alt: "kitty6" },
    { src: "/assets/cute-icons/kitty7.png", alt: "kitty7" },
];

function LogoAnimation() {
  return (
    <div className="py-8 bg-blue-200/10 glass opacity-80">
        <div className="container mx-auto">
            <div className="overflow-hidden"
                    style={{
                        maskImage:
                          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
                        WebkitMaskImage:
                          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
                      }}
            >
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={100}
                            height={100}
                            className="mx-5"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
  );
}

export default LogoAnimation;