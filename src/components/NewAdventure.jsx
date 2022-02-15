import { paste } from '@testing-library/user-event/dist/paste'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewAdventure(props) {
    const { adventures } = props
    const { setAdventures } = props
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

    }

    const handleStopsNameChange = (e) => {
        initialInput.stops[0].name = e.target.value

    }

    const handleStopsDescriptionChange = (e) => {
        initialInput.stops[0].description = e.target.value

    }

    const handleSubmit = (e) => {
        e.preventDefault()

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
        try {
            // console.log('data inside newadventure', data)
            const createdAdventure = await fetch(URL, options)
            const parsedAdventure = await createdAdventure.json()

            setAdventures([...adventures, parsedAdventure])
            navigate('/adventures')
        } catch (err) {
            console.log('newadventure errrorrr', err)
        }
    }

    return (<div className='new-form'>

        <form onSubmit={handleSubmit}>
            <h1 className='title'>New Adventure Plan</h1>
            <ul className='new-list'>
                <li>
                    <label htmlFor="title">Plan Name:</label>
                    <input
                        name="name"
                        id="title"
                        type="text"
                        placeholder="New Adventure Title"
                        onChange={handlePlanNameChange}
                    />
                </li>
                <li>
                    <label htmlFor="stop">New Stop Name:</label>
                    <input
                        name="stops-name"
                        id="stop"
                        type="text"
                        placeholder="New Stop Name"
                        onChange={handleStopsNameChange}
                    />
                </li>
                <li>
                    <label htmlFor="description">Stop Description:</label>
                    <textarea
                        name="stops-description"
                        id="description"
                        cols="30"
                        rows="10"
                        onChange={handleStopsDescriptionChange}
                    ></textarea>
                </li>
                <li>
                    <button>Create New Plan</button>
                </li>
            </ul>
        </form>
    </div>)
}

export default NewAdventure