import SideBar from '@/components/SideBar/SideBar';
import React from 'react';


async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,
    { cache: "no-store" })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return Error()
    }

    return res.json()
}

export async function generateMetadata({ params }) {

        const post = await getData(params. id)
        return { title: post.title,
        description: post.desc,
    }
}


const BlogPage = async ({params}) => {

    const blog = await getData(params.id)


    return (
        <div className='fade-in flex '>

            <div className=' glass w-9/12 border m-3 mt-[100px] p-5 rounded-2xl shadow-xl '>
                <h1 className='slide-in text-5xl m-5 font-bold mb-5  mt-9'>{blog.title}</h1>
                <div className='flex'>
                    <img 
                    src={blog.image}
                    alt={blog.title}
                    className='rounded-xl m-5 shadow-xl w-full max-h-[500px]'
                    />
                </div>
                <div className='text-xl m-5'>
                    {blog.desc}
                </div>
                <div className='text-xl m-5'>
                    {blog.content}
                </div>
            </div>

            <SideBar/>


        </div>

    );
}

export default BlogPage;

