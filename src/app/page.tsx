import TimeLine from "@/components/Home/TimeLine";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="container h-screen mx-auto snap-y snap-mandatory  overflow-scroll no-scrollbar">
      <section
        className="p-3 md:p-4 py-10 h-screen flex flex-col justify-center items-center snap-start"
        id="home"
      >
        {/* Column 1 - Photo */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <Image
            src="/profile.jpeg"
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
      <section className="min-h-screen flex flex-col items-center">
        <TimeLine />
        <button className="p-3 bg-amber-900 rounded-full relative lg:left-28 mt-14">
          <p className="text-xl font-semibold text-center text-white">
            <span>Explore</span> More
          </p>
        </button>
      </section>
    </main>
  );
}
