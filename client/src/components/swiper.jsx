import React from 'react'
import axios from 'axios'
import PetProfile from './pet.jsx'

class Swiper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfAnimals: [],
            zipcode: '10031',
            showDescription: false
        }
        this.getMorePets = this.getMorePets.bind(this)
        this.nextPet = this.nextPet.bind(this)
        this.toggleShowDescription = this.toggleShowDescription.bind(this)
    }

    componentDidMount() {
        this.getMorePets()
    }

    toggleShowDescription() {
        this.setState({showDescription: !this.state.showDescription})
    }


    //Method section
    getMorePets() {
        axios.get('/pets/more', {params: {zipcode: this.state.zipcode}})
             .then((response) => {
                 let currentAnimals = this.state.listOfAnimals.slice();
                 let updatedAnimals = currentAnimals.concat(response.data);
                 this.setState({listOfAnimals: updatedAnimals})

             })
             .catch((err) => console.error(err))
    }

    nextPet() {
        let updatedAnimals = this.state.listOfAnimals.slice(1)
        this.setState({listOfAnimals: updatedAnimals}, () => {
            if (updatedAnimals.length < 2) this.getMorePets()
        })
    }

    render() {
        return(
            <div>
                <div className = 'btnContainer'>
                    <button type='button' class='btn btn-danger'  onClick = {this.nextPet} >Swipe Left</button>
                    <button type='button' class='btn btn-info' onClick = {this.toggleShowDescription}>Toggle More Info</button>
                    <button type='button' class='btn btn-success' onClick = {() => {
                        this.props.swipe(this.state.listOfAnimals[0].petfinder.pet);
                        this.nextPet()
                    }
                        } >Swipe Right</button>
                    {/* <button onClick = {this.getMorePets}>More Life</button> */}
                </div>
                <div className='petContainer'>
                    <PetProfile showDescription = {this.state.showDescription} onSwiper = {true}
                        petInfo = {this.state.listOfAnimals.length > 0 ? this.state.listOfAnimals[0].petfinder.pet : null} />
                </div>
            </div>
        )
    }
}

export default Swiper