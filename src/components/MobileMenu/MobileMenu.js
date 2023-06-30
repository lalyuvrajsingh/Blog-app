"use client"
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

function handleMenuToggle() {
    setIsOpen(!isOpen);
}

function MobileMenu({links}) {
    const [isOpen, setIsOpen] = useState(false)

    
        return (
        <div className='md:hidden flex'>

            <MenuIcon onClick={!isOpen}/>
        
            {!isOpen && (
            <div className='md:hidden flex flex-col p-2'>
            {links.map(link => (
                <Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
            ))}
            </div>
            )}
        </div>
        );
    }

    export default MobileMenu;