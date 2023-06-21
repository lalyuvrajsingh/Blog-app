"use client"

import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [mode, setMode] = useState("light")

    const toggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return(
    <ThemeContext.Provider value={{toggle, mode}}>
    <div className={`theme ${mode}`}>
    {children}
    </div>
    </ThemeContext.Provider>
    )

}
