import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto snap-mandatory snap-y">
      <section className="py-10 flex flex-col justify-center items-center snap-start">
        {/* Column 1 - Photo */}
        <div className="md:w-1/2">
          <Image
            src="/profile.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-full h-full rounded-full"
          />
          <p className="m-3 text-center font-thin italic ">
            Professional Image will arrive in 3-4 business days
          </p>
        </div>

        {/* Column 2 - Text */}
        <div className="flex flex-col items-center justify-center p-8">
          <p className="text-5xl  text-center font-semibold mb-4">
            Hello, Digital Adventurer!
          </p>
          <p className="w-2/3 text-center text-gray-600">
            Myself in 10 seconds: An enthusiastic explorer in the realm of
            technology, driven by boundless curiosity and a passion for
            innovation. BTW, I love Spider-man
          </p>
        </div>
      </section>
      <section
        id="about"
        className="h-screen my-12 snap-end flex justify-center items-center"
      >
        <div className="flex w-full items-center justify-around gap-10 flex-col">
          <div className="w-full flex flex-col md:flex-row justify-around items-center gap-3 p-4">
            <Image
              src="/magic-box.png"
              width={300}
              height={300}
              alt="Magic Box(Computer)"
            />
            <div className="md:w-1/2 flex flex-col gap-5">
              <p className="text-4xl font-semibold">
                About <span className="text-amber-900 ">Mohamed Aslam</span>
              </p>
              <div className="text-2xl font-light" ref={null}>
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
                      className="hover:text-amber-600 transition-colors cursor-default"
                    >
                      {e}{" "}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
