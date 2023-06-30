"use client"
import React from 'react';
import useSWR from 'swr'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useState } from 'react';
import Blog from '../blog/page';
import BlogPost from '@/components/BlogPost/BlogPost';




const Dashboard = (Data) => {

    

    /**const [data, setData] = useState([])
    const [err, setErr] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res = await fetch("",{
                cache: "no-store"
            })
            if (!res.ok){
                setErr(true)
            }

            const data = await res.json()

            setData(res.json)
            setIsLoading(false)
        }
        getData()
        
    }, []);**/

    const session = useSession()
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    if (session.status === "authenticated") {
        router?.push ("/dashboard");
        }
        
        if (session.status === "unauthenticated") {
        router?.push ("/dashboard/login");
        }

    const logout = () =>{
        session.status = "unauthenticated"
    }



        


    



    const { data, mutate, error } = useSWR(`/api/posts`, fetcher)


            
        const [title, setTitle] = useState('');
        const [desc, setDesc] = useState('');
        const [url, setUrl] = useState('');
        const [content, setContent] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();
            // Perform actions to publish the blog and store it in MongoDB
            console.log('Title:', title);
    console.log('Description:', desc);
    //console.log('Image:', newImg);
    console.log('Content:', content);
            // Use the captured input values: title, description, url, content
            setTitle('');
    setDesc('');
    setUrl('');
    setContent('');


            try{
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    image,
                    content,
                    
                })
            })
            mutate()
        } catch(err){
            console.log(err)
        }



        };

        

    


    


    
    return (
        <div className='flex min-h-screen'>

                {data?.map(item => (
                    
                    <div key={item._id} className="m-5 p-5 mt-[100px] flex border h-fit rounded-xl">
                        <div>
                            <img 
                            src={item.image} 
                            alt={item.title} 
                            width={200}
                            className='rounded-xl shadow-md mb'/>
                        </div>
                        <div className='ml-5'>
                        <div className='flex items-center'>
                            <h2 className='text-3xl font-bold mb-5'>{item.title}</h2>
                            <div className='text-red-600 mb-5 ml-auto font-bold'>X</div>
                        </div>
                            
                            <p>{item.desc}</p>
                        </div>
                        
                    </div>
                    
                ))}



                <form
                    className='glass p-7 rounded-xl shadow-xl w-1/2 mt-[100px] m-5  flex flex-col'
                    onSubmit={handleSubmit}
                >
                <h1>{title}</h1>
                    <input
                    type="text"
                    placeholder='Title'
                    className='shadow-md border rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                    type="text"
                    placeholder='Description'
                    className='shadow-md border rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent'
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    />

                    <div className='flex  mb-5 appearance-none'>
                    <input
                        type="text"
                        placeholder='URL'
                        className='text-black shadow-md  mr-5 appearance-none border rounded-xl px-4  py-2 focus:outline-none focus:ring-2 focus:ring-transparent'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <input
                        type="file"
                        placeholder='Choose'
                        className='plain-btn p-2 shadow-md border rounded-sm bg-white text-sm appearance-none'
                    />
                    </div>

                    <textarea
                    type="text"
                    placeholder='Content'
                    className='shadow-md border rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent'
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />


                    

                    

                    <button 
                    className='glass-effect bg-gradient-to-r from-black to-gray-500 w-fit text-white px-4 py-2 rounded-md shadow-md
                    hover:shadow-xl'
                    >Submit</button>

                    <button className='glass-effect bg-gradient-to-r from-black to-gray-500 w-fit text-white px-4 py-2 rounded-md shadow-md
                    hover:shadow-xl m-5' onClick={logout}> Logout </button>

                </form>
                
            
        </div>
    );
}

export default Dashboard;



