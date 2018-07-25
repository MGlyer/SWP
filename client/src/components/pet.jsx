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
                <img src = {pet ? pet.media.photos.photo[0].$t : null} />
                <br/>

                <div>
                    <p>Name: {pet ? pet.name.$t : null}</p>
                    <p>Type of Animal: {pet ? pet.animal.$t : null}</p>
                    <p>Breed: {pet ? pet.breeds.breed.$t : null}</p>
                    <p>Age: {pet ? pet.age.$t : null}</p>
                    <p>Gender: {pet ? pet.sex.$t : null}</p>
                    <p>Size: {pet ? pet.size.$t : null}</p>
                </div>
            </div>
        )
    }
}

export default PetProfile