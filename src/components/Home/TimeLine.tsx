import TimeFall from "@/icons/TimeFall";
import React, { FC } from "react";

type TimeLineEntry = {
  year: number;
  title: string;
  description: string;
};

const TimeLine: FC = () => {
  const timeline: TimeLineEntry[] = [
    {
      year: 2003,
      title: "Earth Landing",
      description:
        "The first image of the world was captured and processed by the combination of eyes and the brain.",
    },
    {
      year: 2006,
      title: "The First Sight",
      description:
        "Upon the first sight of the Magic Box (computer), he felt his curiosity levels exceed, and he was overwhelmed with a feeling of attaining it.",
    },
    {
      year: 2008,
      title: "The Magic Box",
      description:
        "I acquired my own Magic Box, opening many realms of possibility, with everything starting from MS Paint.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center z-10">
      {/* <p className="text-2xl">Adventures with Magic Box</p> */}
      {timeline.map((entry, idx) => {
        let isRight: boolean = idx % 2 !== 0;
        return (
          <div
            className={`flex relative snap-center`}
            key={entry.year + entry.description + idx}
          >
            <TimeFall
              isRight={isRight}
              className="scale-y-105"
              isLast={idx == timeline.length - 1}
            />
            <div
              className={` bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg shadow-md absolute top-1/3 md:top-2/4 flex w-full flex-col items-center justify-center  ${
                isRight
                  ? "md:-right-1/2 lg:-right-full"
                  : "md:-left-1/2 lg:-left-full"
              }`}
            >
              <div className="w-full flex gap-3 items-center justify-center sm:text-lg md:text-2xl font-bold italic">
                <p>{entry.title}</p>
                <p className="text-amber-900">{entry.year}</p>
              </div>
              <p className="text-center">{entry.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLine;
