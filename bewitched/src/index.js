import React from 'react';
import ReactDOM from 'react-dom';
import DayCycle from './day_cycle';

// Count current level of plant
class GrowPlants extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plant_age: 1,
            plant_stage: 1,
            plant_health: 1,
        }
    }
    
    // Determine plant age
    PlantAge() {
        this.setState( prevState => {
            return { plant_age: prevState.plant_age + 1 }
        });
    }

    // Determine plant stage
    PlantStage() {
        switch(this.state.plant_age) {
            case 1:
                // Seedling
                return "Seedling";
            case 2:
                // Sprout
                return "Sprout";
            case 3:
                // Mature
                return "Mature";
            default:
                // Dead?
        }
    }

    // Increase plant health if health is greater than 0 (alive)
    Grow() {
        if(this.state.plant_health > 0) {
            this.setState( prevState => {
                return { plant_health: prevState.plant_health + 1 }
            });
        }
    }

    // Decrease plant_health if health is greater than 0; remain dead if health equals 0
    Hurt() {
        if(this.state.plant_health > 0) {
            this.setState( prevState => {
                return { plant_health: prevState.plant_health - 1 }
            });
        } else {
            this.setState( prevState => {
                return { plant_health: prevState.plant_health = 0 }
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Stage: <span>{ this.PlantStage() }</span></h2>
                <h3>Seedling</h3>
                <h4>Health: { (this.state.plant_health > 0) ? this.state.plant_health : "DEAD" }</h4>
                
                <input type='button' onClick={this.Grow.bind(this)} value='Grow!'/>
                <input type='button' onClick={this.Hurt.bind(this)} value='Hurt :('/>

                <DayCycle /> 
            </div>
        );
    }
}

ReactDOM.render( 
    <GrowPlants />, 
    document.getElementById('root')
);
