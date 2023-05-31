import '../public/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'React & Next-13 Theme 1'
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={`${inter.className} clase-extra`}>
        <Header />
        <main className="main">  
          {children}
        </main>
      </body>
    </html>
  )
}
