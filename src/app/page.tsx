import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="py-10 flex flex-col justify-center items-center ">
        {/* Column 1 - Photo */}
        <div className="md:w-1/2 relative">
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
    </main>
  );
}
