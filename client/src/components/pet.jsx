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

        if (pet) {
            return (
                <div>
                    <div className = 'petInfo'>

                        {this.props.onSwiper ?
                            <img src = {pet.media.photos.photo[2] ? pet.media.photos.photo[2].img : null} />
                            :
                            <img src = {pet.media.photos.photo[1] ? pet.media.photos.photo[1].img : null} />
                        }

                    </div>
                    <br/>

                        
                        {this.props.showDescription ? 
                    <div className = 'petInfo'>
                            <p>Name: {pet.name ? pet.name : null}</p>
                            <p>Type of Animal: {pet.animal ? pet.animal : null}</p>
                            <p>Breed: {pet.breeds ? pet.breeds.breed : null}</p>
                            <p>Age: {pet.age ? pet.age : null}</p>
                            <p>Gender: {pet.sex ? pet.sex : null}</p>
                            <p>Size: {pet.size ? pet.size : null}</p>
                            <p>Description: {pet ? pet.description : null}</p>
                    </div>
                            : null
                        }
                </div>
            )
        } else {
            return(null)
        }
    }
}

export default PetProfile