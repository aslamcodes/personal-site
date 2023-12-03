import TimeLine, { TimeLineEntry } from "@/components/Home/TimeLine";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const timeline: TimeLineEntry[] = [
    {
      year: 2003,
      title: "Embarking on Earth",
      description:
        "The first image of the world was captured and processed by the intricate combination of eyes and the human brain, marking a momentous step in understanding and appreciating the breathtaking beauty of our planet.",
    },
    {
      year: 2009,
      title: "The Enigmatic Magic Box",
      description:
        "Upon encountering the 'Magic Box' (computer) for the first time, an overwhelming surge of curiosity engulfed me, as I felt an irresistible desire to delve into its boundless possibilities.",
    },
    {
      year: 2012,
      title: "Unveiling The Wonders",
      description:
        "I finally acquired my very own Magic Box, unlocking countless realms of possibility, with my journey starting from the humble beginnings of MS Paint.",
    },
  ];
  return (
    <main className="container h-screen mx-auto snap-y snap-mandatory  overflow-scroll no-scrollbar  scroll-smooth">
      <section
        className="p-3 md:p-4 py-10 h-screen flex flex-col justify-center items-center snap-start"
        id="home"
      >
        {/* Column 1 - Photo */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <Image
            src="/profile.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-full w-64 h-64 object-cover"
          />
          <p className="m-3 text-center text-xs md:text-base font-thin italic ">
            Professional Image will arrive in 3-4 business days
          </p>
        </div>

        {/* Column 2 - Text */}
        <div className="flex flex-col items-center justify-center m-2 md:m-4">
          <p className="text-2xl md:text-3xl lg:text-5xl  text-center font-semibold mb-2 md:mb-4">
            Hello, Digital Adventurer!
          </p>
          <p className="md:w-2/3 text-center text-gray-600">
            Myself in 10 seconds: An enthusiastic explorer in the realm of
            technology, driven by boundless curiosity and a passion for
            innovation. BTW, I love Spider-man
          </p>
        </div>
      </section>
      <section
        id="about"
        className="h-screen snap-center p-3 md:p-4 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col md:flex-row justify-around items-center gap-3">
          <Image
            src="/magic-box.png"
            width={400}
            height={400}
            className="w-56 md:w-64 lg:w-96 mt-5"
            alt="Magic Box(Computer)"
          />
          <div className="md:w-1/2 flex flex-col gap-2 md:gap-5">
            <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
              About <span className="text-amber-900 ">Mohamed Aslam</span>
            </p>
            <div
              className="text-md md:text-xl lg:text-2xl font-light transition-all "
              ref={null}
            >
              {`Mohamed\tAslam was raised in Thiruvarur, India, born into a
                hard-working family. From the moment he saw the magic box,
                commonly known as "The\tComputer," his curiosity knew no bounds.
                Today, he is on the path of pursuing technology, all because of
                the little magic box. He is still exploring all the incredible
                things that the magic box can do!`
                .split(" ")
                .map((e, idx) => (
                  <span
                    key={e + idx}
                    className="hover:text-amber-600 hover:font-normal transition-all cursor-default"
                  >
                    {e}{" "}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen flex flex-col items-center"
        id="timeline"
      >
        <TimeLine timeline={timeline} />
        <Link
          href={"/timeline"}
          className="p-3 bg-amber-900 rounded-full relative lg:left-28 mt-14"
        >
          <p className="text-xl font-semibold text-center text-white">
            <span>Explore</span> More
          </p>
        </Link>
      </section>
      <section className="min-h-screen snap-center flex flex-col items-center justify-center mt-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <h1 className="relative text-4xl font-semibold text-amber-950">
            Lets have a{" "}
            <a
              href="mailto:mohamedaslamcodes@gmail.com"
              className=" text-amber-100 p-4 bg-amber-900 rounded-xl cursor-pointer animate-spin"
            >
              chat!
              <ArrowDownCircleIcon className="w-10 absolute -top-16 right-8 text-amber-900 animate-bounce" />
            </a>
          </h1>
          <div className="w-px h-10 md:bg-amber-800 bg-white"></div>
          <section className="flex flex-col gap-4" id="contact">
            <h3 className="text-amber-950 text-3xl font-semibold">
              You can find me here!
            </h3>
            <div className="flex w-full items-center justify-between">
              <div className="inline-flex items-center font-semibold rounded-md p-3 bg-sky-800 text-white">
                <a
                  href={"https://www.linkedin.com/in/mohamed-aslam-228911211/"}
                >
                  LinkedIn
                </a>
              </div>
              <div className="inline-flex items-center font-semibold rounded-md p-3 bg-black text-white">
                <a href={"https://github.com/aslamcodes"}>Github</a>
              </div>
              <div className="inline-flex items-center font-semibold rounded-md p-3 bg-sky-500   text-white">
                <a href={"https://twitter.com/aslamcodes"}>Twitter</a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
