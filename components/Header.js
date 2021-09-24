import React from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import Image from 'next/image'



function Header() {
    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/standings/laliga"><a>Standing</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
