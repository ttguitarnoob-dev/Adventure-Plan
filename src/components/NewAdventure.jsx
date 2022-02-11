import { useState } from 'react'

function NewAdventure(props) {
    const {adventures} = props

    let initialInput = {
        name: ``,
        stops: [{
            name: ``,
            description: ``
        }]
    }
// console.log('initialinput', initialInput)
//     const [input, setInput] = useState(initialInput)

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