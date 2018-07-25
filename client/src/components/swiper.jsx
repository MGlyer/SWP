import React from 'react'

class Swiper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //some state
        }
    }

    //Method section


    render() {
        return(
            <div>
                <div className='petContainer'>
                    <span>some info about the pet</span>
                </div>
                <button>Swipe Left</button>
                <button>Swipe Right</button>
            </div>
        )
    }
}

export default Swiper