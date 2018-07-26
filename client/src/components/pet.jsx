import React from 'react'

class PetProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //some state
        }
    }

    render() {
        var pet = this.props.petInfo
        return(
            <div>
                <img src = {pet ? pet.media.photos.photo[0].img : null} />
                <br/>

                <div>
                    <p>Name: {pet ? pet.name : null}</p>
                    <p>Type of Animal: {pet ? pet.animal : null}</p>
                    <p>Breed: {pet ? pet.breeds.breed : null}</p>
                    <p>Age: {pet ? pet.age : null}</p>
                    <p>Gender: {pet ? pet.sex : null}</p>
                    <p>Size: {pet ? pet.size : null}</p>
                    {this.props.showDescription ? 
                        <p>Description: {pet ? pet.description : null}</p>
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default PetProfile