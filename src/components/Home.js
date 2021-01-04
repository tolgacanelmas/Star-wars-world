import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/index.css'

function Home() {

    return ( 
        <div className="home">
            <img src={'/images/bg.jpg'} />
            <div>
                <h1>WELCOME</h1>
                <Link to="/people">CHOOSE YOUR CHARACTER</Link>
            </div>
        </div>
    )
}

export default Home
