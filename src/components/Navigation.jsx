import { Link } from 'react-router-dom'


function Navigation() {



    return (
        <div className='navigation links'>

            <Link to="/"><h1>Home</h1></Link>
            <Link to="/adventures">All Adventures</Link>
            <Link to="/adventures/new">New Adventure</Link>
            <Link to="/search">Search for Cool Places</Link>
        </div>

    )
}

export default Navigation