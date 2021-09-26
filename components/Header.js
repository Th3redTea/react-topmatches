import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import Image from 'next/image'



function Header() {

     const [show, setShow] = useState(false)

    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li onClick={() => setShow(!show)}>
                        Standings
                        <div className={show ? styles.standing : styles.hidden}>
                            <Link href="/standings/laliga"><a>Laliga</a></Link>
                            <Link href="/standings/premierleague"><a>Premier League</a></Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
