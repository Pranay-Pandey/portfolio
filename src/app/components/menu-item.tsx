import React from "react";
import { IconType } from "react-icons";

const MenuItem = (props: { name: string; icon: any}) => {
  
   
  return (<>
      <li className="font-semibold text-base border-0 border-b-2 border-slate-200 w-[120%] border-solid flex gap-4 items-center cursor-pointer hover:text-red-600">
        {props.icon} <p>{props.name}</p></li>
  </>);
};

export default MenuItem;