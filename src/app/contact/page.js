
import React from 'react';
import Contact from '@/components/Contact form/Contact';




export const metadata = {
    title: "Nikhil Jois contact information",
    description: "This is thecontact information of nikhil jois" 
    }

const ContactPage = () => {
    return (
            <div className="flex flex-col align-middle justify-center">
                <div className='mt-[100px]'>
                <Contact/>
                </div>

            </div>

    );
}

export default ContactPage;
