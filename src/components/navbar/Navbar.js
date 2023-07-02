import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import MobileMenu from '../MobileMenu/MobileMenu';

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
        <div className='navbar shadow-md  flex items-center'>
            <div className="p-4 mr-auto">
                <Link href='/' className='text-2xl font-extrabold font-mono'><h1>Nikhil Jois</h1></Link>
            </div>
            <div className="hidden md:flex justify-center align-middle">
            
            {links.map(link => (
                <Link className='p-4' key={link.id} href={link.url} >{link.title}</Link>
            ))}
            <DarkModeToggle/>
            
            </div>
            
            <MobileMenu links={links} />
            
            
        </div>
    );
}

export default Navbar;
