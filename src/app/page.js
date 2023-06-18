import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="flex p-10 m-10">
      <div className='m-5'>
        <img src="https://cdn.discordapp.com/attachments/1008571149493473361/1116570999312367677/Sam_Ai_closeup_8k_cinematic_oil_painting_of_a_fierce_Apache_war_a650cb4c-c770-4bd0-8fe8-5fc85f3ec2ff.png"
        className='rounded-lg shadow-xl' alt=""/>
      </div>
      <div className='flex flex-col align-middle m-5'>
        <h1 className=''>Nice</h1>

        <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Aliquam facilis amet assumenda 
        necessitatibus placeat, quidem maiores totam impedit
        ipsa itaque harum. Beatae ipsam tempore vitae magni at 
        inventore tempora pariatur!</p>

        <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Aliquam facilis amet assumenda 
        necessitatibus placeat, quidem maiores totam impedit 
        ipsa itaque harum. Beatae ipsam tempore vitae magni at 
        inventore tempora pariatur!</p>

        <a href="">nice</a>
        
      </div>
    </div>
  )
}
