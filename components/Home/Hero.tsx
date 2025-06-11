"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Button from "../common/Button";
import Card from "../common/Card";
import Show_Yo from "@/public/images/Show_Yo.png";
import Say_Hi from "@/public/images/Say_Hi.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-12 gap-5 my-8 container overflow-hidden">
      <Card className={"w-full min-h-fit border col-span-12 md:col-span-8"}>
        <div className=" flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <div className="flex gap-2">
            <Image
              src={Show_Yo}
              alt="Prem Raj"
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />

            <div className="flex flex-col">
              <h1 className="">Hello, I&apos;m Prem Raj</h1>
              <span className="text-xs text-gray-400">
                Full Stack Developer
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <div
              onClick={() => {
                window.open("https://github.com/PremRaj99");
              }}
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-pointer"
            >
              <FiGithub className="text-xl text-white" />
            </div>
            <div
              onClick={() => {
                window.open("https://www.linkedin.com/in/prem-raj99");
              }}
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-pointer"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </div>

            <Button
              onClick={() => {
                window.location.href = "https://wa.me/916200103129";
              }}
            >
              {" "}
              Contact me{" "}
            </Button>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-8">
          I can buid beautiful and functional web solutions for your problems.
        </h1>
        <p className="text-gray-400 mt-8">
          I am a full-stack developer with a passion for creating beautiful and
          functional web applications. I have experience in building web
          applications using React, Next.js, Node.js, Express.js, and MongoDB. I
          am also proficient in HTML, CSS, and JavaScript.
        </p>
      </Card>
      <Card className="col-span-12 md:col-span-4">
        <Image
          src={Say_Hi}
          alt="Hero Image"
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </Card>
    </div>
  );
}
