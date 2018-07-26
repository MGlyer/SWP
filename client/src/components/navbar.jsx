import React from 'react'
import { Link } from 'react-router-dom'

let Navbar = (props) => {
    return(
        <div class = 'container.fluid'>
            <span>Swipe Right To Adopt</span>
                {
                    props.loggedIn ?
                    <ul>
                        <Link to= '/global'>Swipe</Link>
                        <Link to= '/rights'>Review Swipes</Link>
                        <Link to= '/login'>Sign Out</Link>
                    </ul>
                    :
                    <ul>
                        <Link to= '/login'>Login</Link>
                        <Link to= '/signup'>Signup</Link>
                    </ul>
                }
        </div>
    )
}

export default Navbar