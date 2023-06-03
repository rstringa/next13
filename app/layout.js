"use client"
import { useEffect } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css'


const roboto = Roboto({ 
  weight: ['300','400','700'],
  subsets: ['latin'],
  display: 'swap',
 })

export const metadata = {
  description: 'React & Next-13 Theme 1'
}

export default function RootLayout({children}){
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js')
  }, [])

  return (
    <html lang="en">
     
      <body className={`${roboto.className} clase-extra`}>
        <Header />
        <main className="container">  
          {children}
        </main>
      </body>
    </html>
  )
}
