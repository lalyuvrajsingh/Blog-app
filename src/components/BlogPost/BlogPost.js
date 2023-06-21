"use client"
import React from 'react';
import Link from 'next/link';



const Blog = async (Data) => {

    

    return (
        <div className='h-fit w-[350px] m-8 p-5 bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow'>
        
            <img src={Data.imgurl} alt={Data.title} className='rounded-2xl mb-4'/>
            <h1 className='bold text-2xl'>{Data.title}</h1>
            <br/>
            <p>{Data.desc}</p>
        
        </div>
    );
}

export default Blog;
