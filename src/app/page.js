import Image from 'next/image'
import styles from './page.module.css'
import LatestBlogs from '@/components/LatesBlogs/LatestBlogs'
import NewsLetter from '@/components/NewsLetter/NewsLetter'
import Contact from '@/components/Contact form/Contact'

export default function Home() {
  return (
    <>
    <section>
    <div className="max-w-6xl md:flex h-fit mx-auto px-4 lg:px-8">

      <div className='flex flex-col justify-center align-middle m-5'>

      <div className='mr-6 mt-[150px] md:w-0.7 h-fit '>
        <h1 className='slide-in font-bold text-5xl mb-5'>Hey, this is Nikhil Jois.</h1>
        
        <div className='m-5 '>
        <img src="https://cdn.discordapp.com/attachments/1116923562977148959/1122500089609474089/lalyuvrajsingh24_make_an_illustration_of_a_table_that_has_-_a_l_5eb3b500-1231-4fa0-9678-87c815f53921.png"
        className='md:hidden flex slide-in rounded-3xl shadow-xl ' alt=""/>
        </div>

          <br />
          <p className='text-2xl md:text-xl '> I write about my journey towards becoming a happier, healthier, wealthier, and wiser version of myself.</p>
          <br />
          <p className='text-2xl md:text-xl'>Lorem ipsum dolor sit amet consectetur 
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
        <img src="https://cdn.discordapp.com/attachments/1116923562977148959/1122500089609474089/lalyuvrajsingh24_make_an_illustration_of_a_table_that_has_-_a_l_5eb3b500-1231-4fa0-9678-87c815f53921.png"
        className='hidden md:flex rounded-3xl shadow-xl' alt=""/>
      </div>


    </div>
    </section>

    <LatestBlogs/>
    <NewsLetter/>
    <Contact/>

    </>
  )
}
