"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, details, demoLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={item}
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer text-sm md:text-base w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h2 className="text-foreground font-semibold">{name}</h2>
          <p className="text-muted">{description}</p>
        </div>
        <p className="text-muted sm:text-foreground whitespace-nowrap">
          {new Date(date).toDateString()}
        </p>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-muted"
        >
          <p className="whitespace-pre-wrap">{details}</p>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-accent hover:underline"
            >
              Visit Project →
            </a>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectLayout;
