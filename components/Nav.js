import Link from 'next/link'
import styles from './nav.module.scss'
function Nav() {
    return (
        <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About </a>
                </Link>
            </li>
        </ul>
        </nav>
    )
}

export default Nav