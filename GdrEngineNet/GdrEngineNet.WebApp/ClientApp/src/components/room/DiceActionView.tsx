import * as React from "react";
import { DiceAction } from "../../models/DiceAction";
import { Character } from "../../models/Character";


interface IProps {
    action: DiceAction;
    author: Character;
}

class DiceActionView extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        //const { characterId, text, tag } = this.props.action;
        //console.log(this.props.action);
        //console.log(this.props.action.characterId);

        var success = this.props.action.result < this.props.action.characteristicValue;

        return (
            <div>
                <p>
                    {this.props.author.fullName()}: Tira su {this.props.action.characteristic}: {this.props.action.result}/{this.props.action.rolledDice}; CD: {this.props.action.characteristicValue}; {success ? "Successo!" : "Fallimento..."}
                </p>
            </div>
        );
    }
}

export default DiceActionView;