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
        this.setState({viewingSingle: true, faveToView: pet})
    }

    render() {
        let pet = this.state.faveToView
        if (this.props.faves) {
            return(
                <div class = 'container'>
                {this.state.viewingSingle ? 

                    /*viewing single favorite section*/

                    <div>
                        <div>
                        <button type='button' class = 'btn btn-info'
                            onClick = {this.handleBackToFaves}
                        >Back to Swipes</button>
                        </div>

                        <div>

                            <div className = 'petInfo'>
                            <img src = {pet.media.photos.photo[3] ? pet.media.photos.photo[3].img : null} />
                                <p>Name: {pet.name ? pet.name : null}</p>
                                <p>Type of Animal: {pet.animal ? pet.animal : null}</p>
                                <p>Breed: {pet.breeds ? pet.breeds.breed : null}</p>
                                <p>Age: {pet.age ? pet.age : null}</p>
                                <p>Gender: {pet.sex ? pet.sex : null}</p>
                                <p>Size: {pet.size ? pet.size : null}</p>
                                <p>Description: {pet.description ? pet.description : null}</p>
                                <p>Contact information: {pet.contact.address1 ? pet.contact.address1 : null}, {pet.contact.city ? pet.contact.city : null}. <br/>  
                                    {pet.contact.email ? pet.contact.email : null}</p>
                            </div>
                        </div>

                    </div>
                    
                    :


                    /*basic favorite section*/
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