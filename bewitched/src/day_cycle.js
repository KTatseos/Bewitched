import React from 'react';
//import ReactDOM from 'react-dom';

class DayCycle extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            date: new Date(),
        }
    }

    // Clock ticks every second
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    // Teardown 
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    // Update state
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // Do timing stuff here
    DayCycle() {
        // aaa
    }

    render() {
        return (
            <div>
               
                <h3>Local time: {this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }

}


// ReactDOM.render( 
//     <DayCycle />, 
//     document.getElementById('root')
// );

export default DayCycle;