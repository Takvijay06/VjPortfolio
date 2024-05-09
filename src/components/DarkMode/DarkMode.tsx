import React, { useCallback } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = useCallback(()=>{
        document.querySelector("body")?.setAttribute("data-theme","dark");
    },[]);

    const setLightMode = useCallback(()=>{
        document.querySelector("body")?.setAttribute("data-theme","light");
    },[]);

    const toogleTheme = useCallback((e:any)=>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
    },[setDarkMode, setLightMode])

    setDarkMode();
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleTheme}
            />
            <label className='dark_mode_label'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
