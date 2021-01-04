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

    const renderCharInfo = () => {
        return (
            <div>
                <h3>
                    Name : {person.name}
                </h3>
                <div>
                    Gender : {person.gender}
                </div>

                <div>
                    Height : {person.height}
                </div>
                <div>
                    Mass : {person.mass}
                </div>
                <div>
                    Skin Color : {person.skin_color}
                </div>
                <div>
                    Hair Color : {person.hair_color}
                </div>
            </div>
        )
    }

    return (
        <div className="person-container">
            <div className="one-person">
                <picture>
                    <img src={`/images/${person.image}`} />
                </picture>
                <div className="person-info">
                    {renderCharInfo()}
                </div>
                <div className="person-planet">
                    <h3>
                        Born : {homeWorld.name}
                    </h3>
                    <picture className="person-planet-img">
                        <img src={`/images/${homeWorld.name}.jpg`} />
                    </picture>
                </div>
            </div>
            <div className="select-buttons">
                <button className="btn btn-primary">Select Character</button>
                <Link to="/people">
                    <button className="btn btn-danger">
                        Back to Characters
                </button>

                </Link>
            </div>
        </div >
    )

}

export default Person
