"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My passion for technology has fueled my desire to explore many aspects,{" "}
        <span className="text-lg">
          especially in the field of website and mobile application development.
        </span>{" "}
        I gained experience using technologies such as{" "}
        <span className="italic">
          React, Next.js, Express, Hapi.js, MongoDB, PostgresSQL, and Flutter
        </span>
        , and I frequently work with <span className="italic">TypeScript</span>.
      </p>

      <p>
        I find it exciting to work on web and mobile projects and I want to
        continue developing my skills and exploring the vast possibilities in
        the field of programming.
      </p>
    </motion.section>
  );
}
