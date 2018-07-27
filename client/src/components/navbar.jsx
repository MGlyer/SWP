import React from 'react'
import { Link } from 'react-router-dom'

let Navbar = (props) => {
    return(
        <div class = 'container.fluid'>
            <h2 className='super-title' >Swipe Right To Adopt</h2>
            <div className = "navBtn-Container" >
                {
                    props.loggedIn ?
                    <ul>
                        <Link type="button" class="btn btn-primary" to= '/global'>Swipe</Link>
                        <Link type="button" class="btn btn-primary" to= '/rights'>Review Swipes</Link>
                        <Link onClick = {props.signout} 
                            type="button" class="btn btn-secondary" to= '/login'>Sign Out</Link>
                    </ul>
                    : null
                    // <ul>
                    //     <Link type="button" class="btn btn-info" to= '/login'>Login</Link>
                    //     <Link type="button" class="btn btn-info" to= '/signup'>Signup</Link>
                    // </ul>
                }
            </div>
        </div>
    )
}

export default Navbar