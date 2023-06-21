import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

const Navbar = () => {

    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 2,
            title: "Blog",
            url: "/blog"
        },
        {
            id: 3,
            title: "About",
            url: "/about"
        },
        {
            id: 4,
            title: "Contact",
            url: "/contact"
        },
        
    ]

    return (
        <div className='navbar shadow-md'>
            <div className="p-4 mr-auto">
                <Link href='/' className=' text-2xl font-extrabold font-mono'><h1>Nikhil Jois</h1></Link>
            </div>
            <div className="flex justify-center align-middle">
            
            {links.map(link => (
                <Link className='p-4' key={link.id} href={link.url} >{link.title}</Link>
            ))}
            <DarkModeToggle/>
            </div>
        </div>
    );
}

export default Navbar;
