import TimeFall from "@/icons/TimeFall";
import React, { FC } from "react";

export type TimeLineEntry = {
  year: number;
  title: string;
  description: string;
};

const TimeLine: FC<{ timeline: TimeLineEntry[] }> = ({ timeline }) => {
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
              className={`z-20 bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg shadow-md absolute top-1/3 md:top-2/4 flex w-full flex-col items-center justify-center  ${
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
