
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function AddStop(){
    const {id} = useParams()
    const [adventure, setAdventure] = useState({})
    let editedAdventure = {adventure}
    const handleFetch = async () => {
        try {
            //URL will need to be the heroku backend server
            const URL = `http://localhost:8000/adventures/${id}`
            const response = await fetch(URL)
            const foundAdventure = await response.json()
            console.log('found adventure', foundAdventure)
            setAdventure(foundAdventure)
            


        } catch(err){
            console.log('adventure details fetch errrr', err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    const handleStopChange = (e) => {
        console.log('omg')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        adventure.stops.push({
            name: e.target[0].value,
            description: e.target[1].value
        })
        console.log(adventure)
    }

    return(<div>
        <h1>add stop page</h1>
        <h2>{adventure.name}</h2>
        {adventure.stops && adventure.stops.map((oneStop, index) => (
        <div className='stop-details' key={index}>
                <h2 className='stop-name'>Stop {index +1}:</h2>
                <h3>{oneStop.name}</h3>
                 <p>{oneStop.description}</p>
        </div>
            ))}
            <form onSubmit={handleSubmit}>
            <label htmlFor="stop">New Stop Name:</label>
                <input type="text" name="stop" placeholder='New Stop Name Here' />
                <textarea name="stop-description" id="" cols="30" rows="10"></textarea>
                <button>Add Stop</button>
            </form>
    </div>)
}

export default AddStop