import { Link } from 'react-router-dom'


function Navigation() {



    return (
        <nav className='navigation'>
            <div className='home'>
                <Link className='home-link' to="/"><h1>Home</h1></Link>
            </div>
            <div className='links'>
                <Link className='text-link' to="/adventures">All Adventures</Link>
                <Link className='text-link' to="/adventures/new">New Adventure</Link>
                <Link className='text-link' to="/search">Search for Cool Places</Link>
            </div>
        </nav>

    )
}

export default Navigation