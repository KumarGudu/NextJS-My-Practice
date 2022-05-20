import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'
const Nav = () => {
  return (
    <nav className={navStyle.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/About">About</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Nav