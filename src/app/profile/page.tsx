import React from "react";
import MenuItem from "../components/menu-item";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Menu } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";

const MenuContents = [
  { name: "Home" , icon: <FaHome/>},
  { name: "About" , icon: <IoPersonSharp/>},
  { name: "Services" , icon: <FaListUl/>},
  { name: "Experience" , icon: <MdWork/>},
  { name: "Contact" , icon: <IoChatbubblesSharp/>}
];

const Page = () => {
  return (
    <>
      <Box>
        < Grid container spacing={2} >
          <Grid item xs={3}>
            <div className="h-screen flex flex-col align-center justify-between">
              <h1 className=""></h1>
              <ul className="m-auto flex flex-col gap-7">
              {MenuContents.map((item, index) => (
                <MenuItem key={index} name={item.name} icon={item.icon}/>
              )
              )}
              </ul>
              <p></p>
            </div>
          </Grid>
          <Grid item xs={9} className="bg-sky-50">
                
          </Grid>
        </Grid >
      </Box>
    </>
  );
};

export default Page;