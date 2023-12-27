'use client';
import React, {useState} from "react";
import MenuItem from "../components/menu-item";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";

const MenuContents = [
  { name: "Home" , icon: <FaHome/>, selected: true},
  { name: "About" , icon: <IoPersonSharp/>, selected: false},
  { name: "Services" , icon: <FaListUl/>, selected: false},
  { name: "Experience" , icon: <MdWork/>, selected: false},
  { name: "Contact" , icon: <IoChatbubblesSharp/>, selected: false}
];

const Page = () => {
  const [selected, setSelected] = useState<string>('Home');
  return (
    <>
      <Box>
        < Grid container spacing={2} >
          <Grid item xs={3}>
            <div className="h-screen flex flex-col align-center justify-between">
              <div className="relative mx-auto mt-16">
                <div className="absolute top-0 right-0 w-4 h-4 border-l-0 border-b-0 border-t-[6px] border-r-[6px] border-red-500 border-solid"></div>
                <h1 className="text-center px-5 py-2 text-3xl">Pranay</h1>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-[6px] border-b-[6px] border-t-0 border-r-0 border-red-500 border-solid"></div>
              </div>
              <ul className="m-auto flex flex-col gap-7">
              {MenuContents.map((item, index) => (
                <MenuItem key={index} name={item.name} icon={item.icon} selected={selected===item.name} onClick={()=>setSelected(item.name) }/>
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