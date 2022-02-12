import { useState, useEffect } from 'react'




function Search(props) {
const {GrabCoordinates} = props

function HandleSubmit(e){
    e.preventDefault()
    const denver = "Denver"

    GrabCoordinates(denver)

}
    return (<div>
        <h1>Search</h1>
        <form onSubmit={HandleSubmit}>
            <button>Search for Denver</button>
        </form>

    </div>)
}

export default Search