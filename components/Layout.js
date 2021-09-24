import React from 'react'
import Footer from './footer'
import Header from './Header'

function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            { children }
        </div>
    )
}

export default Layout
