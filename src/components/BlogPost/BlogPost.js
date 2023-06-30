
import React from 'react';
import Link from 'next/link';




const BlogPost = async (Data) => {

    

    return (
        <div className='fade-in glass h-fit md:w-[350px] sm:w-fit mt-[100px] m-8 p-5 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow'>
        
            <img src={Data.image} alt={Data.title} className='rounded-2xl mb-4'/>
            <h1 className='bold text-2xl'>{Data.title}</h1>
            <br/>
            <p>{Data.desc}</p>
        
        </div>
    );
}

export default BlogPost;
