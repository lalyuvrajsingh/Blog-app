"use client"
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {

    const session = useSession()

    

const router = useRouter()

if (session.status === "loading") {
return <p>Loading...</p>;
}

if (session.status === "authenticated") {
router?.push ("/dashboard");
}

if (session.status === "unauthenticated") {
router?.push ("/dashboard/login");
}

const handleSubmit = async (event)=>{ 

    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value

    try{
        const res = await fetch("/api/auth/register",{
            method: POST,
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
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
            
            >

                <input 
                type="text"  
                placeholder='name'
                className='shadow-md border  rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent' 
                required
                
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

                <button 
                className='glass-effect bg-gradient-to-r from-black to-gray-500 w-fit text-white px-4 py-2 rounded-md shadow-md
                hover:shadow-xl'
                onClick={()=> signIn('google')}>Login with Google</button>

            </form>
            
        </div>
    );
}

export default Login;
