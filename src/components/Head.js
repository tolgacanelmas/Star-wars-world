import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
    return (
        <header>
            <Link to="/"><h1>Star Wars World</h1></Link>
        </header>
    )
}

export default Head
