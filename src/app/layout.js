"use client"
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Inter, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from '../../context/ThemeContext';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThemeProvider>
      <Navbar/>
      {children}
      <Footer/>
      </ThemeProvider>
      </body>
    
    </html>
  )
}
