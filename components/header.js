import React from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import Image from 'next/image'



function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                    <Image 
                    src="/ballLogo.png"  
                    width={92} 
                    height={92} 
                    alt="today's top matches football"
                    />
             </div>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/allgames"><a>All matches</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
