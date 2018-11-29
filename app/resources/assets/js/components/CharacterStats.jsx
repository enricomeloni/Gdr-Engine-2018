import React, {Component} from 'react';

class CharacterStats extends Component {

    constructor(props)
    {
        super(props);
        console.log(this.props.stats);
    }

    render() {

        let statSpans = [];

        let stats = this.props.stats;
        let statKeys = Object.keys(stats);


        statKeys.forEach((key) => {
            console.log(key + " " + stats[key]);
        });

        statKeys.map((key) =>
            <div><span className="font-weight-bold">{key}:</span> stats[key]</div>
        );

        return (
            statKeys.map((key) =>
                <div key={key}><span className="font-weight-bold">{key}:</span> {stats[key]}</div>
            )
        );
    }
}

export default CharacterStats;