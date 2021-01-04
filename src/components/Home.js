import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/index.css'

function Home() {

    return (
        <div className="home">
            <h1>WELCOME</h1>
            <Link to="/people">CHOOSE YOUR CHARACTER</Link>
        </div>
    )
}

export default Home
