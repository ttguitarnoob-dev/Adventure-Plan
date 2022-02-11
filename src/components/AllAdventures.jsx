import {Link} from 'react-router-dom'

function AllAdventures(props){
    const {adventures} = props
console.log('all adventures props', props)
    return(<div className="adventures-page">
        <h1>All Adventures</h1>
        <div className="adventures-list">
            {adventures && adventures.map((adventure, index) => (
                <div className="individual-adventure" key={adventure._id}>
                    <Link to={`/adventures/${adventure._id}`}>{adventure.name}</Link>
                </div>
            ))}
        </div>


        {/* <h2>{adventures[0].name}</h2>
        <p>Stop 1: {adventures[0].stops[0].name}</p>
        <p>{adventures[0].stops[0].description}</p> */}
        
    </div>)
}

export default AllAdventures