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
                <div>
                    {this.props.faves.map((fave) => {
                        return(
                            <PetProfile petInfo = {fave} />
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div>You don't have any swipe rights yet!</div>
            )
        }
    }
}


export default Favorites