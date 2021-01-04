import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const imageOfPlanets = ["Tatooine.jpg", "Alderaan.jpg", "Bespin.jpg", "Coruscant.jpg", "Dagobah.jpg", "Ender.jpg", "Hoth.jpg", "Kamino.jpg", "Naboo.jpg", "Yavin.jpg"];

function Person(props) {
    const [homeWorld, setHomeWorld] = useState(null);
    const person = props.location.state.person

    useEffect(() => {
        console.log(homeWorld)
    }, [])

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const fetchHomeWorld = await fetch(person.homeworld);
        const homeWorldJson = await fetchHomeWorld.json();
        setHomeWorld(homeWorldJson);
    }

    if (homeWorld == null) return null

    const name = `Name : ${person.name}`
    const gender = `Gender : ${person.gender}`
    const born = `Born : ${homeWorld.name}`
    const mass = `Mass : ${person.mass}`
    const height = `Height : ${person.height}`
    const skinColor = `Skin Color : ${person.skin_color}`
    const hairColor = `Hair Color : ${person.hair_color}`

    return (
        <div className="person-container">
            <div className="one-person">
                <picture>
                    <img src={`/images/${person.image}`} />
                </picture>
                <div className="person-info">
                    <h3>
                        {name}
                    </h3>
                    <div>
                        {gender}
                    </div>

                    <div>
                        {height}
                    </div>
                    <div>
                        {mass}
                    </div>
                    <div>
                        {skinColor}
                    </div>
                    <div>
                        {hairColor}
                    </div>
                </div>
                <div className="person-planet">
                    <h3>
                        {born}
                    </h3>
                    <picture className="person-planet-img">
                        <img src={`/images/${homeWorld.name}.jpg`} />
                    </picture>
                </div>
            </div>
            <button className="btn btn-info">Select Character</button>
            <Link to="/people">
                <button className="btn btn-info">
                    Back to Characters
                </button>

            </Link>
        </div >
    )

}

export default Person
