
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Inter, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from '../../context/ThemeContext';
import { SessionProvider } from "next-auth/react"
import AuthProvider from '@/components/AuthProvider/AuthProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Nikhil Jois",
  description: "This is the personal website of nikhil jois" 
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThemeProvider>
      <AuthProvider>
      <Navbar/>
      {children}
      <Footer/>
      </AuthProvider>
      </ThemeProvider>
      </body>
    
    </html>
  )
}
