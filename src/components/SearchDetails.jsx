import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"


function SearchDetails() {
    const { id } = useParams()
    const [info, setInfo] = useState(null)
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
        } catch (err) {
            console.log('searchdetails errerro', err)
        }
    }

    function HasImage() {
        return (<div className="container">
            <div className="search-details">
                {console.log(info)}
                <h2>{info.name}</h2>
                <Link className="text-link" to={'/search'} >Back to Search Results</Link>
                <img src={info.preview.source} alt="" />
                <div className="address">
                    <h3>Address:</h3>
                    <p>{info.address.house_number} {info.address.road}</p>
                    <p>{info.address.city}, {info.address.state}</p>
                    <p>{info.address.postcode}</p>
                </div>
            </div>
        </div>)
    }

    function NoHasImage() {
        return (<div className="container">
            <div className="search-details">
                {console.log("YES")}
                <h2>{info.name}</h2>
                <Link className="text-link" to={'/search'} >Back to Search Results</Link>
                <div className="address">
                    <h3>Address:</h3>
                    <p>{info.address.house_number} {info.address.road}</p>
                    <p>{info.address.city}, {info.address.state}</p>
                    <p>{info.address.postcode}</p>
                </div>
            </div>
        </div>)
    }
    useEffect(() => {
        handleFetch()
    }, [])

    if (!info) {
        return <p>Please wait while we retreive your request...</p>
    }
    if (info.preview) {
        return <HasImage />
    } else {
        return <NoHasImage />
    }

}

export default SearchDetails
