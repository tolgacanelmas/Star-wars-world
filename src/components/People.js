import React, { useEffect, useState } from 'react'
import Person from './Person'
import { Link } from "react-router-dom";

function People() {
    const [data, setData] = useState([]);
    const [person, setPerson] = useState(null)
    const [image, setImage] = useState(["luke.jpg", "c3po.jpg", "r2d2.jpg", "darth-vader.jpg", "leia.jpg",
        "owen-lars.jpg", "beru.jpg", "r5d4.jpg", "biggs-darklighter.jpg", "obi-wan.jpg"])

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const result = await fetch('https://swapi.dev/api/people/');
        const getResult = await result.json();
        setData(getResult);
    }

    if (data.length == 0) return null

    return (
        <div className="chars-container">

            {
                data.results.map((people, i) => {
                    people.image = image[i]
                    return (
                        <Link to={{
                            pathname: `/people/${people.name}`,
                            state: { person: people }
                        }}
                            className="person" key={i}
                        >
                            <div>

                                <picture>
                                    <img src={`/images/${people.image}`} />
                                </picture>
                                <h3>
                                    {
                                        people.name
                                    }
                                </h3>
                            </div>
                        </Link >
                    )
                })
            }
        </div >
    )

}

export default People
