import React from 'react'
import PetProfile from './pet.jsx'

class Favorites extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            viewingSingle: false,
            faveToView: null
        }
        //bindings
        this.handleBackToFaves = this.handleBackToFaves.bind(this)
        this.handleViewFave = this.handleViewFave.bind(this)
    }

    //Methods
    handleBackToFaves() {
        this.setState({viewingSingle: false, faveToView: null})
    }

    handleViewFave(pet) {
        console.log('you clicked a pet!')
        this.setState({viewingSingle: true, faveToView: pet})
    }

    render() {
        if (this.props.faves) {
            return(
                <div class = 'container'>
                {this.state.viewingSingle ? 
                    <button type='button' class = 'btn btn-info'
                        onClick = {this.handleBackToFaves}
                    >Back to Swipes</button>
                    :
                    <div class='row'>
                        {this.props.faves.map((fave) => {
                            return(
                                <div class= 'col-4' onClick = {() => this.handleViewFave(fave)}>
                                <PetProfile petInfo = {fave} onSwiper = {false}  />
                                </div>
                            )
                        })}                        
                    </div>
                }
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