"use client";
import React, { useState, useEffect } from "react";
import MenuItem from "../components/menu-item";
import { Switch } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import Home from "../components/Home";
import {
  getThemedataClass,
  ColorPicker,
  getColordataClass,
} from "../components/colors";
import { FaSun } from "react-icons/fa";

const MenuContents = [
  { name: "Home", icon: <FaHome />, selected: true },
  { name: "About", icon: <IoPersonSharp />, selected: false },
  { name: "Services", icon: <FaListUl />, selected: false },
  { name: "Experience", icon: <MdWork />, selected: false },
  { name: "Contact", icon: <IoChatbubblesSharp />, selected: false },
];

const Page = () => {
  const [selected, setSelected] = useState<string>("Home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themedata, setThemedata] = useState<string>(getThemedataClass(theme));
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>("text-red-500 border-red-500");

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setColorPickerOpen(false);
    console.log(
      "SELECTED COLOR: ", color
    );
    
  };

  useEffect(() => {
    setThemedata(getThemedataClass(theme));
  }, [theme]);


  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div
              className={`h-screen flex flex-col align-center justify-between ${themedata}`}
            >
              <div className="relative mx-auto mt-16">
                <div className={`absolute top-0 right-0 w-4 h-4 border-l-0 border-b-0 border-t-[6px] border-r-[6px] border-solid ${selectedColor}`}></div>
                <h1 className={`text-center px-5 py-2 text-3xl ${themedata}`}>
                  <span className="font-carattere text-5xl">P</span>ranay
                </h1>
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-[6px] border-b-[6px] border-t-0 border-r-0 border-solid ${selectedColor}`}></div>
              </div>
              <ul className={`m-auto flex flex-col gap-7 ${themedata}`}>
                {MenuContents.map((item, index) => (
                  <MenuItem
                    key={index}
                    name={item.name}
                    icon={item.icon}
                    selected={selected === item.name}
                    onClick={() => setSelected(item.name)}
                    selectedColor={selectedColor}
                  />
                ))}
              </ul>
              <p></p>
            </div>
          </Grid>
          <Grid item xs={9} className="bg-sky-50">
            {/* A light dark theme picker on the right corner expanded on click to select the theme */}
            <div className="flex flex-col gap-2 absolute right-5 top-10">
              <div className={` w-10 h-10 rounded-full cursor-pointer`}>
                <Switch
                  checked={theme === "dark"}
                  onChange={handleThemeChange}
                />
              </div>
              <div className=" w-10 h-10 rounded-full cursor-pointer flex flex-col justify-end items-end">
                <FaSun
                  onClick={() => setColorPickerOpen((prev) => !prev)}
                  size={"2rem"}
                />
              </div>
              {colorPickerOpen && (
                <div className="color-selector absolute bottom-[-2rem] right-0">
                  <ColorPicker onClick={handleColorClick} />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
