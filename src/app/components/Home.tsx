import React, { useEffect, useState } from "react";
import profilePhoto from "./../../../public/profile.jpeg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const infos = [
  "web developer",
  "flutter developer",
  "machine learning enthusiast",
  "robotics practitioner",
];

export default function Home(props: { colortheme: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infos.length);
    }, 4000); // Change the delay according to your requirement

    return () => clearInterval(interval);
  }, []);

  const typeText = (text:string, index:number, callback: any) => {
    if (index < text.length) {
      setTypedText((prev) => prev + text.charAt(index));
      setTimeout(() => typeText(text, index + 1, callback), 50);
    } else {
      setTimeout(callback, 1000);
    }
  };

  useEffect(() => {
    typeText(infos[currentIndex], 0, () => {
      // Reset after typing
      setTimeout(() => setTypedText(""), 500);
    });
  }, [currentIndex]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <h1 className="text-3xl font-bold">
            Hello, my name is{" "}
            <span className={`${props.colortheme} font-carattere`}>
              Pranay Pandey
            </span>
          </h1>
          <div className="text-3xl font-bold mt-6">
            I'm a <span className={`${props.colortheme} font-carattere`}>{typedText}</span>
          </div>
          <p className="mt-6">
            I'm a passionate developer with experience in various frameworks,
            and I love to learn new things. I have gained knowledge of various
            technologies and frameworks, including frontEnd technologies like
            HTML, React, NextJS, Flutter, and backend technologies like NodeJS,
            ExpressJS, MySQL, Firebase, PostgreSQL, FastAPI, Django.
          </p>
        </Grid>
        <Grid item xs={4} className="flex justify-center relative">
          <>
            <div
              className={`absolute top-[-2rem] right-0 w-12 h-12 border-l-0 border-b-0 border-t-[12px] border-r-[12px] border-solid ${props.colortheme}`}
            ></div>
            <img src={profilePhoto.src} alt="Profile" className="h-[16rem]" />
            <div
              className={`absolute bottom-[-2rem] left-0 w-12 h-12 border-l-[12px] border-b-[12px] border-t-0 border-r-0 border-solid ${props.colortheme}`}
            ></div>
          </>
        </Grid>
      </Grid>
    </Box>
  );
}
