import React from 'react'
import PetProfile from './pet.jsx'

class Favorites extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //some state
        }
        //bindings

    }

    //Methods

    render() {
        if (this.props.faves) {
            return(
                <div class = 'container'>
                    <div class='row'>
                        {this.props.faves.map((fave) => {
                            return(
                                <div class= 'col-4'>
                                <PetProfile petInfo = {fave} />
                                </div>
                            )
                        })}                        
                    </div>
                </div>
            )
        } else {
            return (
                <div>You don't have any swipe rights yet!
                </div>
            )
        }
    }
}


export default Favorites