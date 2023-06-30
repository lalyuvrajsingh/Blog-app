import React from 'react';

const Page = () => {
    return (
            <div className="fade-in md:flex sm:flex-col p-10 min-h-screen justify-center items-center">
        <div className='m-5 mt-[100px]'>
            <img src="https://cdn.discordapp.com/attachments/1008571149493473361/1116570999312367677/Sam_Ai_closeup_8k_cinematic_oil_painting_of_a_fierce_Apache_war_a650cb4c-c770-4bd0-8fe8-5fc85f3ec2ff.png"
            className='hidden md:flex rounded-lg shadow-xl' alt=""/>
        </div>
        <div className='flex flex-col mt-[100px] align-middle m-5'>

            <h1 className='slide-in font-bold text-4xl'>About</h1>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Aliquam facilis amet assumenda 
            necessitatibus placeat, quidem maiores totam impedit
            ipsa itaque harum. Beatae ipsam tempore vitae magni at 
            inventore tempora pariatur!</p>
            <div className='m-5 flex items-center'>
            <img src="https://cdn.discordapp.com/attachments/1008571149493473361/1116570999312367677/Sam_Ai_closeup_8k_cinematic_oil_painting_of_a_fierce_Apache_war_a650cb4c-c770-4bd0-8fe8-5fc85f3ec2ff.png"
            className='md:hidden flex rounded-lg shadow-xl' alt=""/>
            </div>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Aliquam facilis amet assumenda 
            necessitatibus placeat, quidem maiores totam impedit 
            ipsa itaque harum. Beatae ipsam tempore vitae magni at 
            inventore tempora pariatur!</p>
            <br />
            <p className='text-xl' >Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Aliquam facilis amet assumenda 
            necessitatibus placeat, quidem maiores totam impedit 
            ipsa itaque harum. Beatae ipsam tempore vitae magni at 
            inventore tempora pariatur!</p>
            
        </div>
        </div>
    );
}

export default Page;
