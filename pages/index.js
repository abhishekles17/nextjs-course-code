import React from "react";
import Link from 'next/link'

const HomePage = () => {

    return (
        <>
        This is the HomePage
        <div><Link href="/portfolio">portfolio</Link></div>
        <div><Link replace href="/clients">My clients page</Link></div>


        </>
    )
}

export default HomePage;