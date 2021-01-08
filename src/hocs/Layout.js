import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Layout(props) {
    return (
        <div className="">
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}
