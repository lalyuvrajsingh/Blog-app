import React from 'react'
import Link from 'next/link'

const Work = (works) => {


    return (
        <div className='h-fit w-[350px] m-8 p-5 bg-black/[0.1] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow'>
        <Link href={works.url}>
            <h1 className='bold text-2xl'>{works.title}</h1>
            <br/>
            <p>{works.discription}</p>
            <img src={works.imgurl} alt={works.title} className='rounded-2xl mt-4'/>
        </Link>
        </div>
    )
}

export default Work