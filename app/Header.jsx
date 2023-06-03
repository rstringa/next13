"use client"
import styles from './header.module.css';
import Link from 'next/link';
import SearchBar from './components/SearchBar'
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (

    <div className={styles.header}>
        <div className="container">
            <ul> 
              <li key="1"><Link 
              className={pathname === '/' ? styles.active : ""}
              href="/">Home</Link></li>
              <li key="2">
              <Link
              className={pathname === '/about' ? styles.active : ""}
              href="/about">About</Link></li>
              <li key="3"><Link 
              className={pathname === '/nosotros' ? styles.active : ""}
              href="/nosotros">Nosotros</Link></li>
              <li key="4"><Link 
              className={pathname === '/posts' ? styles.active : ""}
              href="/posts">Posts</Link></li>
            </ul>
          <div className="row justify-content-center mt-3">
              <div className="col-lg-4">
                <SearchBar />
              </div>
          </div>
        </div>
    </div>


  )
}
