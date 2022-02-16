import { Link } from 'react-router-dom'

function AllAdventures(props) {
    const { adventures } = props
    console.log('all adventures props', props)
    return (

        <div className='adventures-body'>
            <div className="adventures-page">
                <h1>All Adventures</h1>
                <div className="adventures-list">
                    <ul>
                        {adventures && adventures.map((adventure, index) => (
                            <li key={adventure._id} className='one-adventure'>

                                <div className="individual-adventure"  id={`adventure-${index}`}>
                                    <Link className='adventure-link' to={`/adventures/${adventure._id}`}>{adventure.name}</Link>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default AllAdventures