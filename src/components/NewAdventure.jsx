import { paste } from '@testing-library/user-event/dist/paste'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function NewAdventure(props) {
    const {adventures} = props
    const {setAdventures} = props
    const navigate = useNavigate()

    let initialInput = {
        name: ``,
        stops: [{
            name: ``,
            description: ``
        }]
    }

    const handlePlanNameChange = (e) => {
        initialInput.name = e.target.value
        console.log('changed input', initialInput)
    }
    
    const handleStopsNameChange = (e) => {
        initialInput.stops[0].name = e.target.value
        console.log('changed input', initialInput)
    }

    const handleStopsDescriptionChange = (e) => {
        initialInput.stops[0].description = e.target.value
        console.log('changed input', initialInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submititit this', initialInput)
        newAdventure(initialInput)
    }

    const newAdventure = async (data) => {
        //URL will need to be the heroku backend address
        const URL = "http://localhost:8000/adventures"
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }
        try{
            // console.log('data inside newadventure', data)
            const createdAdventure = await fetch(URL, options)
            const parsedAdventure = await createdAdventure.json()
            console.log('parsed adventure', parsedAdventure)
            setAdventures([...adventures, parsedAdventure])
            navigate('/adventures')
        }catch(err){
            console.log('newadventure errrorrr', err)
        }
    }

    return (<div>
        <h1>New Adventure Plan</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Plan Name:</label>
            <input 
            name="name" 
            id="title" 
            type="text" 
            placeholder="New Adventure Title"
            onChange={handlePlanNameChange} 
            />

            <label htmlFor="stop">New Stop Name:</label>
            <input 
            name="stops-name" 
            id="stop" 
            type="text" 
            placeholder="New Stop Name"
            onChange={handleStopsNameChange} 
            />

            <label htmlFor="description">Stop Description:</label>
            <textarea 
            name="stops-description" 
            id="description" 
            cols="30" 
            rows="10"
            onChange={handleStopsDescriptionChange}
            ></textarea>

            <button>Create New Plan</button>
        </form>

    </div>)
}

export default NewAdventure