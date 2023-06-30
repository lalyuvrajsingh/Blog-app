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
            
                
                
                <div className='text-2xl mr-5 flex items-center rounded-full '>☀️</div>

            
        
        ) : (
            
                <div className=' text-2xl mr-5 flex items-center rounded-full'>🌙</div>
                
        )}
        </button>
    );
    };

    export default DarkModeToggle;