import * as React from "react";
import Resources from "./Resources";
import Characteristics from "../models/Characteristics"

interface IProps {
    characteristics: Characteristics;
}

class CharacterStats extends React.Component<IProps, {}> {

    readonly className = "font-weight-bold";
    readonly characteristicsKeys = [
        "strength",
        "toughness",
        "agility",
        "intelligence",
        "willpower",
        "influence"
    ];

    constructor(props) {
        super(props);
    }

    render() {
        const characteristics = this.props.characteristics;


        return (
            <div>
                {this.characteristicsKeys.map((key) =>
                    <div key={key}><span className={this.className}>{key}:</span> {characteristics[key]} </div>
                )}
            </div>
        );
    }
}

export default CharacterStats;