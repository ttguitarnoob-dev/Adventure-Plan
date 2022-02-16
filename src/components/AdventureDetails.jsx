import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


 function AdventureDetails(props) {
    const { id } = useParams()
    const [adventure, setAdventure] = useState({})
    const { DeleteAdventure } = props
    //URL will need to be the heroku backend server
    const URL = `https://puddle-jumper.herokuapp.com/adventures/${id}`
    const handleFetch = async () => {
        try {
            const response = await fetch(URL)
            const foundAdventure = await response.json()
            setAdventure(foundAdventure)
        } catch (err) {
            console.log('adventure details fetch errrr', err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        DeleteAdventure(id)
    }


    return (<div className='container'>
        <div className='search-details'>
            <h1>{adventure.name}</h1>
            {adventure.stops && adventure.stops.map((oneStop, index) => (

                    <div key={index} className='stop-details'>


                                <h2 className='stop-name'>Stop {index + 1}: {oneStop.name}</h2>
                                <h3></h3>
                                <p>{oneStop.description}</p>

                    </div>

            ))}
            <Link className='text-link add-stop' to={`/adventures/update/${id}`}>Add a Stop</Link>
            <form onSubmit={handleSubmit}>
                <button className='button'>Delete This Adventure Plan</button>
            </form>
        </div>
    </div>)
}

export default AdventureDetails