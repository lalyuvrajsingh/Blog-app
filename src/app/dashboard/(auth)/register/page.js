"use client"

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import { NextResponse } from 'next/server';

const Register = () => {

    const [err, setErr] = useState(false);

    const router = useRouter()

    

    const handleSubmit = async (event)=>{

        event.preventDefault()
        const name = event.target[0].value
        const email = event.target[1].value
        const password = event.target[2].value

        try{
            const res = await fetch("/api/auth/register",{
                method: POST,
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            res.status === 201 && router.push("/dashboard/login?success=Account has been created")

        }catch(err){
            setErr(true);
        }

    }


    return (
        <div className='flex flex-col items-center h-[100vh] justify-center'>

    

            <form 
            className='glass p-7 rounded-xl shadow-xl mt-[100px] m-5 w-1/4 flex flex-col'
            onSubmit={handleSubmit}
            >

                <input 
                type="text"  
                placeholder='name'
                value={name}
                className='shadow-md border  rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent' 
                required
                onChange={handleInputChange}
                />

                

                <input 
                type="email" 
                placeholder='email' 
                className='shadow-md border rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent'
                required
                />

                <input 
                type="password" 
                placeholder='password' 
                className='shadow-md border rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent'
                required 
                
                />

                <button className='glass-effect bg-gradient-to-r from-black to-gray-500 w-fit text-white px-4 py-2 rounded-md shadow-md
                hover:shadow-xl'>
                    Register
                </button>

            </form>
            {err && new NextResponse(err)}
            <Link href="/dashboard/login" className='w-1/4 text-gray-500 items-center'>login with an existing account</Link>
        </div>
    );
}

export default Register;
