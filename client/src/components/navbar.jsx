import React from 'react'
import { Link } from 'react-router-dom'

let Navbar = (props) => {
    return(
        <div class = 'container.fluid'>
            <h2>Swipe Right To Adopt</h2>
            <div>
                {
                    props.loggedIn ?
                    <ul>
                        <Link type="button" class="btn btn-info" to= '/global'>Swipe</Link>
                        <Link type="button" class="btn btn-info" to= '/rights'>Review Swipes</Link>
                        <Link onClick = {props.signout} type="button" class="btn btn-secondary" to= '/login'>Sign Out</Link>
                    </ul>
                    :
                    <ul>
                        <Link type="button" class="btn btn-info" to= '/login'>Login</Link>
                        <Link type="button" class="btn btn-info" to= '/signup'>Signup</Link>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Navbar