"use client"
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import CancelIcon from '@mui/icons-material/Cancel';


function MobileMenu({links}){
    const [isOpen, setIsOpen] = useState(false)

    function handleMenuToggle() {
    setIsOpen(!isOpen);
    }

        return (
        <div className='md:hidden flex '>

            <MenuIcon onClick={handleMenuToggle} className='mr-5'/>

            {isOpen ? (
            <div className='md:hidden flex flex-col absolute right-0 mt-2 w-48 glass blur-2xl bg-white rounded-md shadow-lg'>

            <Link href='/' className=' text-2xl font-extrabold mt-10 font-mono'><h1>Nikhil Jois</h1></Link>
            <CancelIcon  onClick={handleMenuToggle} />
            {links.map(link => (
                <Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
            ))}
            </div>
            ): ''}

        </div>
        );
    }

    export default MobileMenu;