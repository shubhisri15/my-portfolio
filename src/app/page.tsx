'use client'

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { notoSerif } from "./fonts/noto-serif";

// Static image paths
const imagePaths = [
  "/hero-bg/1.webp",
  "/hero-bg/2.webp",
  "/hero-bg/3.webp",
  "/hero-bg/4.webp",
];

export default function Home() {
  const [loadedImages, setLoadedImages] = useState(
    Array(imagePaths.length).fill(false)
  );

  // Handler when an image finishes loading
  const handleLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <main className="relative w-full h-screen overflow-hidden text-slate-300">
      {/* Background image strip */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        {imagePaths.map((src, i) => (
          <div
            key={i}
            className="relative md:w-1/4 w-full md:h-full h-1/4 transition-opacity duration-800 ease-in-out"
            style={{ opacity: loadedImages[i] ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`bg-${i}`}
              fill
              className="object-cover"
              priority
              onLoad={() => handleLoad(i)}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col justify-center gap-12 items-start h-full px-8 md:ml-40">
        <div className="flex flex-col gap-8">
          <h1
            className={`text-3xl md:text-7xl font-light fadeInUp delay-100 ${notoSerif.className}`}
          >
            She Came,
          </h1>
          <h1
            className={`text-3xl md:text-7xl font-light fadeInUp delay-300 ${notoSerif.className}`}
          >
            She Saw,
          </h1>
          <h1
            className={`text-3xl md:text-7xl font-light fadeInUp delay-500 ${notoSerif.className}`}
          >
            She{" "}
            <span className="font-bold text-slate-300">Design-gineered.</span>
          </h1>

          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-2xl font-light max-w-2xl">
              Hi I am Shubhi, a UX Engineer and Designer with an affinity
              towards lame jokes and{" "}
              <span className="font-medium">intuitive user experiences</span>.
            </p>
          </div>

          <div className="flex gap-6 my-4 items-center">
            <Link
              href="/projects"
              className="bg-white text-black py-4 px-6 font-medium cursor-pointer rounded-md"
            >
              Explore My Works
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubhisrivastava15/"
              target="_blank"
            >
              <FaLinkedin size="2rem" className="hover:fill-gray-400" />
            </Link>
            <Link href="https://github.com/shubhisri15" target="_blank">
              <FaGithub size="2rem" className="hover:fill-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
