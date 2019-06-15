import * as React from "react";
import { Action, ActionType } from "../../models/Action";
import { TextAction } from "../../models/TextAction";
import { DiceAction } from "../../models/DiceAction";

import TextActionView from "./TextActionView";
import DiceActionView from "./DiceActionView";

interface IProps {
    action: Action;
}

class ActionView extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const action = this.props.action;

        console.log(action.actionType + " "  + ActionType.DiceAction + " " + ActionType.TextAction);
        switch (action.actionType) {
        case ActionType.TextAction:
            return <TextActionView action={action as TextAction} />;
        case ActionType.DiceAction:
            return <DiceActionView action={action as DiceAction}/>;
        default:
            return <p>Unknown action type</p>;
        }
    }
}

export default ActionView;