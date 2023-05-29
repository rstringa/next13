import '../public/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'React & Next-13 Theme', 
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">  
          {children}
        </main>
      </body>
    </html>
  )
}
