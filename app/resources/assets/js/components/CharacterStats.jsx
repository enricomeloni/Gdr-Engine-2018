import React, {Component} from 'react';


const statsKeys = [
    "strength",
    "toughness",
    "agility",
    "intelligence",
    "perception",
    "willpower",
    "fellowship"
];

class CharacterStats extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {

        let statSpans = [];

        let statsData = this.props.character.characteristics;

        return (
            statsKeys.map((key) =>
                <div key={key}><span className="font-weight-bold">{key}:</span> {statsData[key]}</div>
            )
        );
    }
}

export default CharacterStats;
