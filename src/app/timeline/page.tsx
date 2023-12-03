import TimeLine, { TimeLineEntry } from "@/components/Home/TimeLine";
import React from "react";

const LifeOfAslam = () => {
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
    {
      year: 2013,
      title: "Discovering Fun and Beyond",
      description:
        "With the advent of the Internet, I downloaded my first game, BigFoot, igniting a myriad of questions about its creation and propelling me on a path of discovery and fascination.",
    },
    {
      year: 2014,
      title: "The Answer Revealed",
      description:
        "GWBasic, introduced at my school, became my first programming language. In it, I sensed something inherently powerful – the key to all my questions. Programming became my channel for this magical force.",
    },
    {
      year: 2016,
      title: "Unlocking The Coding Realm",
      description:
        "C/C++ became the ultimate key, elevating my programming arsenal and granting me access to a whole new world of endless possibilities.",
    },
    {
      year: 2020,
      title: "Venturing into New Horizons",
      description:
        "Embarking on a journey through diverse realms, I delved into Game Development, Android Development, Web Development, AI, ML, DL, and numerous other captivating domains. Each path I explored unveiled a world of boundless opportunities.",
    },
    {
      year: 2021,
      title: "Locked down with Covid",
      description:
        "Being a Teen Kid with ample time, I started learning industry practices with the magic box, delving into technologies like React, NextJS, and many more.",
    },
    {
      year: 2022,
      title: "Real World Tasks",
      description:
        "Enrolled in various 'Magic channels' (college groups), I joined forces with them to create different types of magic (projects).",
    },
    {
      year: 2023,
      title: "Hunt for Magic Clans",
      description:
        "Armed with a variety of magic channeling techniques I learned through life, my hunt begins for clans (Companies) out there to grow together as a formidable force.",
    },
  ];

  return (
    <div className="h-screen overflow-scroll snap-y snap-mandatory">
      <TimeLine timeline={timeline} />
    </div>
  );
};

export default LifeOfAslam;
