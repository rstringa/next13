import styles from './header.module.css';
import Link from 'next/link';
import SearchBar from './components/SearchBar'

export default function Header() {
  return (

    <div className={styles.menu}>
          <ul> 
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        <div className={styles.search_div}><SearchBar /></div>
      </div>


  )
}
