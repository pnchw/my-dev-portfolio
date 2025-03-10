import React from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const stackItems = [
    { id: 1, name: "Javascript", icon: SiJavascript, color: "#f7f307"},
    { id: 2, name: "React", icon: FaReact, color: "#61DAFB"},
    { id: 3, name: "Next.js", icon: TbBrandNextjs, color: "#000000"},
    { id: 4, name: "Node.js", icon: IoLogoNodejs, color: "#339933"},
    { id: 5, name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336691"},
    { id: 6, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8"},
    { id: 7, name: "Bootstrap", icon: SiBootstrap, color: "#810afa"},
];

function Stack() {
  return (
    <section id="skill" className="select-none py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My <span className="text-blue-400">Skills</span></h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {stackItems.map((item) => (
                <div
                    className="flex flex-col items-center justify-center rounded-xl p-4" 
                    key={item.id}
                >
                    <div className="mb-4 bg-white/10 p-6 rounded-xl">
                        {React.createElement(item.icon, {
                            className: "w-32 h-32",
                            style: {color: item.color}
                        })}
                    </div>
                    <p className="text-gray-500 font-semibold">{item.name}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;