import React, {Component} from 'react';


class Cell extends Component {

    constructor(prop){
        super();
        this.state = {
            color: prop.value,
        }
    }
    
    colorClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){

        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.colorClick}>Cell saga</div>
        )
    }
}

export default Cell;
