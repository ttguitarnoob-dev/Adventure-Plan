import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function SearchDetails(){
    const {id} = useParams()
    const [info, setInfo] = useState()
    const options = {
        method: "GET"
    }
    const URL = `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=5ae2e3f221c38a28845f05b6c67374d584cd2b24c51eb1cc312c6506`
    console.log('should be same as xid', URL)
    const handleFetch = async () => {
        try {
            const response = await fetch(URL, options)
            const foundItem = await response.json()
            console.log('found item', foundItem)
            setInfo(foundItem)
        } catch(err){
            console.log('searchdetails errerro', err)
        }
    }
useEffect(() => {
    handleFetch()
}, [])

    return(<div>
        <h1>Search Details</h1>
        <h2>{info.name}</h2>
    </div>)
}

export default SearchDetails