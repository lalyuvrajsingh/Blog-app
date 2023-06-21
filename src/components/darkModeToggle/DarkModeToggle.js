    "use client"
    import { useState, useEffect } from 'react';
    import ToggleOffIcon from '@mui/icons-material/ToggleOff';
    import ToggleOnIcon from '@mui/icons-material/ToggleOn';
    import { ThemeContext } from '../../../context/ThemeContext';
    import React, { useContext } from 'react';
    

    const DarkModeToggle = () => {

        const {toggle, mode} = useContext(ThemeContext);

    return (
        <button
        className="text-gray-500 dark:text-gray-400 mb-2 mr-3"
        onClick={toggle}
        >
        {mode === "light" ? (
            <div>
            <div className='border rounded-2xl flex justify-center align-middle'>
                
                <div className='bg-blue-500 rounded-full w-[18px]  ease-in-out h-[18px] m-1 ml-2'></div>
                <div className='m-1 mr-2 w-[18px] h-[18px] rounded-full '>☀️</div>

            </div>
            </div>
        
        ) : (
            <div>
            <div className='border rounded-2xl flex  '>
                <div className='m-1 mr-2 w-[18px] h-[18px] rounded-full'>🌙</div>
                <div className='bg-blue-500 rounded-full w-[18px] h-[18px] m-1 ml-2'></div>
            </div>
            </div>
        )}
        </button>
    );
    };

    export default DarkModeToggle;