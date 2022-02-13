import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
 


function Search(props) {
const {GrabCoordinates} = props
const {search} = props

function HandleSubmit(e){
    e.preventDefault()
    const denver = "Denver"
console.log('search input', e.target[0].value)
    GrabCoordinates(e.target[0].value)

}
    return (<div>
        <h1>Search For Interesting Locations Near Your Destination</h1>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="city"></label>
            <input 
            type="text" 
            name='city'
            id='city'
            placeholder='Enter City or Town'
            />

            <button>Search</button>
        </form>
<div className='search-results'>
    {search && search.map((result, index) => (
        <div key={index}>
            <Link to={`/search/${result.properties.xid}`}><p>{result.properties.name}</p></Link>
        </div>
    ))}

</div>
    </div>)
}

export default Search