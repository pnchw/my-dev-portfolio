"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import kitty from "/public/assets/cute-icons/kitty.png";
import kitty1 from "/public/assets/cute-icons/kitty1.png";
import kitty2 from "/public/assets/cute-icons/kitty2.png";
import kitty3 from "/public/assets/cute-icons/kitty3.png";
import kitty4 from "/public/assets/cute-icons/kitty4.png";
import kitty5 from "/public/assets/cute-icons/kitty5.png";
import kitty6 from "/public/assets/cute-icons/kitty6.png";
import kitty7 from "/public/assets/cute-icons/kitty7.png";

const images = [
    { src: kitty, alt: "kitty" },
    { src: kitty1, alt: "kitty1" },
    { src: kitty2, alt: "kitty2" },
    { src: kitty3, alt: "kitty3" },
    { src: kitty4, alt: "kitty4" },
    { src: kitty5, alt: "kitty5" },
    { src: kitty6, alt: "kitty6" },
    { src: kitty7, alt: "kitty7" },
    { src: kitty, alt: "kitty" },
    { src: kitty1, alt: "kitty1" },
    { src: kitty2, alt: "kitty2" },
    { src: kitty3, alt: "kitty3" },
    { src: kitty4, alt: "kitty4" },
    { src: kitty5, alt: "kitty5" },
    { src: kitty6, alt: "kitty6" },
    { src: kitty7, alt: "kitty7" },
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