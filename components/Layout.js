import React from 'react'
import Footer from './footer'
import Header from './Header'
import Image from 'next/image'
import styles  from '../styles/layout.module.scss'

function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className={styles.heroImageContainer}></div>
            { children }
        </div>
    )
}

export default Layout
