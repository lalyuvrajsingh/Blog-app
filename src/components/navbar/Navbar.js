import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio"
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog"
        },
        {
            id: 4,
            title: "About",
            url: "/about"
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact"
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard"
        }
    ]

    return (
        <div className='flex justify-center p-4 align-middle backdrop-blur-30 border shadow-lg'>
            <div className="p-4">
                <Link href='/'><h1> Lal Yuvraj Singh</h1></Link>
            </div>
            {links.map(link => (
                <Link className='p-4 ' key={link.id} href={link.url} >{link.title}</Link>
            ))}
        </div>
    );
}

export default Navbar;
