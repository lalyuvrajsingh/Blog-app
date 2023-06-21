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
    throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async () => {

    const Data = await getData()

    return (
        <div className='grid grid-cols-3 gap-4'>
                            {Data.map(item => (
                    <Link href={`blog/${item.id}`} >
                    <BlogPost className='p-4' 
                    key={item.id}
                    imgurl='https://cdn.discordapp.com/attachments/1116923562977148959/1117014878599774328/lalyuvrajsingh24_make_product_shoot_image_of_a_plant_plant_is_a_3305a3bf-8063-4098-a171-baedfe246e67.png'
                    title={item.title}
                    />
                    </Link>
                ))}
        </div>
    );
}

export default Page;
