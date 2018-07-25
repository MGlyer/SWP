import React from 'react'
import axios from 'axios'

class Swiper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfAnimals: [],
            zipcode: '10031'
        }
        this.getMorePets = this.getMorePets.bind(this)
        this.nextPet = this.nextPet.bind(this)
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
                <div className='petContainer'>
                    <span>some info about the pet</span>
                </div>
                <button onClick = {this.nextPet} >Swipe Left</button>
                <button>Swipe Right</button>
                <button onClick = {this.getMorePets}>More Life</button>
            </div>
        )
    }
}

export default Swiper