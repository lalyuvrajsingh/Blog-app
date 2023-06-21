import Image from 'next/image'
import styles from './page.module.css'
import LatestBlogs from '@/components/LatesBlogs/LatestBlogs'
import NewsLetter from '@/components/NewsLetter/NewsLetter'
import Contact from '@/components/Contact form/Contact'

export default function Home() {
  return (
    <>
    <section>
    <div className="fade-in flex p-10">

      <div className='flex flex-col justify-center align-middle m-5'>

      <div className='mr-6 mt-[150px]'>
        <h1 className='slide-in font-bold text-5xl mb-5'>Hey, this is Nikhil Jois.</h1>
          <br />
          <p className='text-2xl'> I write about my journey towards becoming a happier, healthier, wealthier, and wiser version of myself.</p>
          <br />
          <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquam facilis amet assumenda 
          necessitatibus. Beatae ipsam tempore vitae magni at 
          inventore tempora pariatur!</p>

          <br />
      </div>



        <button className="glass-effect bg-gradient-to-r from-black to-gray-500 w-1/4 text-white px-4 py-2 rounded-md shadow-md
        hover:bg-gradient-to-l ">
        Contact
        </button>

      </div>

      

      <div className='m-5 mt-[150px]'>
        <img src="https://cdn.discordapp.com/attachments/1008571149493473361/1116570999312367677/Sam_Ai_closeup_8k_cinematic_oil_painting_of_a_fierce_Apache_war_a650cb4c-c770-4bd0-8fe8-5fc85f3ec2ff.png"
        className='rounded-3xl  shadow-xl' alt=""/>
      </div>


    </div>
    </section>

    <LatestBlogs/>
    <NewsLetter/>
    <Contact/>

    </>
  )
}
