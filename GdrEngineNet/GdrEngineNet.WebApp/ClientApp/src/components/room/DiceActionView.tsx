import * as React from "react";
import { Action } from "../../models/Action";
import { DiceAction } from "../../models/DiceAction";


interface IProps {
    action: DiceAction;
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
                    Player {this.props.action.characterId}: Tira su {this.props.action.characteristic}: {this.props.action.result}/{this.props.action.rolledDice}; CD: {this.props.action.characteristicValue}; {success ? "Successo!" : "Fallimento..."}
                </p>
            </div>
        );
    }
}

export default DiceActionView;