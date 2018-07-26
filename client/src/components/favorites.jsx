import React from 'react'

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
                <div>your faves here</div>
            )
        } else {
            return (
                <div>You don't have any swipe rights yet!</div>
            )
        }
    }
}


export default Favorites