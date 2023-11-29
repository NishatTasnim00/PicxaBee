"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi2';


const DashboardThemeButton = () => {
    const {theme, setTheme} = useTheme();
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={` 
          border 
          ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
          rounded-full
         
          lg:h-9
          lg:w-9
          h-8 pl-2
          hover:bg-opacity-80
          transition-all
        `}
      >
        {theme === "dark" ? <><HiOutlineLightBulb size={16} /></> : <><HiLightBulb size={16}/></>}
      </button>
    )
}

export default DashboardThemeButton