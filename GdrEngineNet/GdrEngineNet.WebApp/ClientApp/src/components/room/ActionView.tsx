import * as React from "react";
import { Action, ActionType } from "../../models/Action";
import { TextAction } from "../../models/TextAction";
import { DiceAction } from "../../models/DiceAction";

import TextActionView from "./TextActionView";
import DiceActionView from "./DiceActionView";
import { Character } from "../../models/Character";

interface IProps {
    action: Action;
    author: Character;
}

class ActionView extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const action = this.props.action;
        switch (action.actionType) {
        case ActionType.TextAction:
                return <TextActionView action={action as TextAction} author={this.props.author} />;
        case ActionType.DiceAction:
                return <DiceActionView action={action as DiceAction} author={this.props.author}/>;
        default:
            return <p>Unknown action type</p>;
        }
    }
}

export default ActionView;