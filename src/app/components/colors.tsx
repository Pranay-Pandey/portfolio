import {useState} from "react";


const getThemedataClass = (theme: string) => {
    if (theme === 'dark') {
        return 'bg-gray-800 text-white';
    }
    return 'bg-white text-black';
};

const Colors = [
    { color: "text-red-500 border-red-500" , name: "Red", bg: "bg-red-500" },
    { color: "text-yellow-500 border-yellow-500" , name: "Yellow", bg: "bg-yellow-500" },
    { color: "text-green-500 border-green-500" , name: "Green", bg: "bg-green-500" },
    { color: "text-blue-500 border-blue-500" , name: "Blue", bg: "bg-blue-500" },
    { color: "text-amber-500 border-amber-500" , name: "Amber", bg: "bg-amber-500" },
    { color: "text-lime-500 border-lime-500" , name: "Lime", bg: "bg-lime-500" },
]

const getColordataClass = (color: string) => {
    return Colors.find(item => item.name === color)?.color.toString();
};

const ColorPicker = (props: { onClick: (color: string) => void }) => {
    return (<>
        <div className="flex flex-row gap-2">
            {Colors.map((item, index) => (
                <div key={index} className={`w-6 h-6 rounded-full  ${item.bg} cursor-pointer`}
                    onClick={() => {props.onClick(item.color); console.log(item.name);
                    }}></div>
            ))}
        </div>
    </>);
};


export { getThemedataClass, ColorPicker, getColordataClass};