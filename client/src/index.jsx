import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            //some state
        }
    }


    //Method section



    //Render Section
    render() {
        return(
            <div>
                we're on the page!
            </div>
        )
    }
}

ReactDom.render( <App />, document.getElementById('app')) 