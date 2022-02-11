import {Link} from 'react-router-dom'

function AllAdventures(props){
    const {adventures} = props
console.log('all adventures props', props)
    return(<div className="adventures-page">
        <h1>All Adventures</h1>
        <div className="adventures-list">
            {adventures && adventures.map((adventure, index) => (
                <div className="individual-adventure" key={adventure._id} id={`adventure-${index}`}>
                    <Link to={`/adventures/${adventure._id}`}>{adventure.name}</Link>
                </div>
            ))}
        </div>
    </div>)
}

export default AllAdventures