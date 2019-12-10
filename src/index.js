import React from 'react';
import ReactDOM from 'react-dom';

// Count current level of plant
class GrowPlants extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    Grow(){
        this.setState( prevState => {
           return { count: prevState.count + 1 }
        });
    }

    Hurt(){
        this.setState( prevState => {
           return { count: prevState.count - 1 }
        });
    }
  
    render() {
        return (
            <div>
                <h2>Stage: <span>1</span></h2>
                <h3>Seedling</h3>
                <h4>Level: { this.state.count }</h4>
                
                <input type='button' onClick={this.Grow.bind(this)} value='Grow!'/>
                <input type='button' onClick={this.Hurt.bind(this)} value='Hurt :('/>
            </div>
        );
    }
}

ReactDOM.render( 
    <GrowPlants />, 
    document.getElementById('root')
);
