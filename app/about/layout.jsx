
import styles from './styles.module.css'

export default function AboutLayout({
    children,
}){
   
    return (
        <>
            <nav className={styles.navbar}>About NavBar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}