
import BlogPost from '@/components/BlogPost/BlogPost';
import Link from 'next/link';
import React from 'react';



async function getData() {
    const res = await fetch("http://localhost:3000/api/posts",
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

const Blog = async () => {

    const Data = await getData()

    return (
        <div className='md:grid grid-cols-3 gap-4 sm:flex flex-col'>
                            {Data.map(item => (
                    <Link href={`/blog/${item._id}`} >
                    <BlogPost
                    key={item._id}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    content={item.content}
                    />
                    </Link>
                ))}
        </div>
    );
}

export default Blog;
