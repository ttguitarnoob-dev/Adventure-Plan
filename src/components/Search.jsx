import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



function Search(props) {
    const { GrabCoordinates } = props
    const { search } = props

    function HandleSubmit(e) {
        e.preventDefault()
        const denver = "Denver"
        console.log('search input', e.target[0].value)
        GrabCoordinates(e.target[0].value)

    }
    return (<div className='search'>
        <h1 className='title'>Search For Interesting Locations Near Your Destination</h1>
        <div >
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
        </div>
        <div className='search-results'>
            <h3>Search Results:</h3>
            {search && search.map((result, index) => (
                <Link className='search-link' to={`/search/${result.properties.xid}`}>
                    <div className='individual-result' key={index}>
                        <p>{result.properties.name}</p>
                    </div>
                </Link>
            ))}

        </div>
    </div>)
}

export default Search