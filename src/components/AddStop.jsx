
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AddStop() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [adventure, setAdventure] = useState({})
    let editedAdventure = { adventure }
    const handleFetch = async () => {
        try {
            //URL will need to be the heroku backend server
            const URL = `https://puddle-jumper.herokuapp.com/adventures/${id}`
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
        adventure.stops.push({
            name: e.target[0].value,
            description: e.target[1].value
        })
        updateAdventure(adventure)
    }

    const updateAdventure = async (data) => {
        //URL will need to be the heroku backend address
        const URL = `https://puddle-jumper.herokuapp.com/adventures/${id}`
        const options = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const updatedAdventure = await fetch(URL, options)
            navigate(`/adventures/${id}`)
        } catch (err) {
            console.log('updateadventure errreerr', err)
        }
    }

    return (<div className='container'>
        <div className='search-details'>
            <h2>{adventure.name}</h2>
            {adventure.stops && adventure.stops.map((oneStop, index) => (
                <div className='stop-details' key={index}>
                    <h2 className='stop-name'>Stop {index + 1}: {oneStop.name}</h2>
                    <h3></h3>
                    <p>{oneStop.description}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="stop">New Stop Name:</label>
                        <input type="text" name="stop" placeholder='New Stop Name Here' />
                    </li>
                    <li>
                        <label htmlFor="new-details">New Stop Description:</label>
                        <textarea name="stop-description" id="new-details" cols="30" rows="10"></textarea>
                    </li>
                    <li>
                        <button>Add Stop</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>)
}

export default AddStop