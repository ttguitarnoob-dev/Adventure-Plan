import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"


function SearchDetails(props) {
    const navigate = useNavigate()
    const { adventures } = props
    const { id } = useParams()
    const [info, setInfo] = useState(null)
    const [adventureId, setAdventureId] = useState()
    const [allAdventures, setAllAdventures] = useState({})
    //URL will need to be the heroku backend address
    let BEURL = `https://puddle-jumper.herokuapp.com/adventures/`
    const options = {
        method: "GET"
    }
    const URL = `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=5ae2e3f221c38a28845f05b6c67374d584cd2b24c51eb1cc312c6506`

    //FUNCTIONS
    const handleFetch = async () => {
        try {
            const response = await fetch(URL, options)
            const foundItem = await response.json()
            setInfo(foundItem)
        } catch (err) {
            console.log('searchdetails errerro', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (let i = 0; i < e.target[0].length; i++) {
            if (e.target[i].value) {
                let id = e.target[i].value
                setAdventureId(id)
                BEURL = `https://puddle-jumper.herokuapp.com/adventures/${e.target[i].value}`
                getSelectedAdventure()
            } else {
                return
            }
        }
    }

    const updateAdventure = async (data) => {
        const options = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const updatedAdventure = await fetch(BEURL, options)
            navigate(`/adventures`)
        } catch (err) {
            console.log('tried to add stop but no work', err)
        }

    }

    const getSelectedAdventure = async () => {
        const response = await fetch(BEURL)
        const foundAdventure = await response.json()
        foundAdventure.stops.push({
            name: info.name,
            description: `Address: ${info.address.house_number} ${info.address.road} ${info.address.city}, ${info.address.state}`
        })
        updateAdventure(foundAdventure)
    }

    function HasImage() {
        return (<div className="container">
            <div className="search-details">
                <h2>{info.name}</h2>

                <Link className="text-link" to={'/search'} >Back to Search Results</Link>

                <form onSubmit={handleSubmit} >
                    <label htmlFor="add">Add Stop To Adventure</label>
                    <select className="select-adv" id="add">
                        {adventures && adventures.map((adventure, index) => (
                            <option key={index} value={adventure._id}>{adventure.name}</option>
                        ))}
                    </select>
                    <button>Add</button>
                </form>

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
                <h2>{info.name}</h2>
                <Link className="text-link" to={'/search'} >Back to Search Results</Link>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="add">Add Stop To Adventure</label>
                    <select className="select-adv" id="add">
                        {adventures && adventures.map((adventure, index) => (
                            <option key={index} value={adventure._id}>{adventure.name}</option>
                        ))}
                    </select>
                    <button>Add</button>
                </form>


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
        return(<div className="search">
            <p className="title">Please wait while we retreive your request...</p>
        </div>)
    }
    if (info.preview) {
        return <HasImage />
    } else {
        return <NoHasImage />
    }

}

export default SearchDetails
