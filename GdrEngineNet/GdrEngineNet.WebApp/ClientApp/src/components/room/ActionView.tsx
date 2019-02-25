import * as React from "react";
import { Action, ActionType } from "../../models/Action";
import { TextAction } from "../../models/TextAction";

import TextActionView from "./TextActionView";

interface IProps {
    action: Action;
}

class ActionView extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const action = this.props.action;

        switch (action.actionType) {
            case ActionType.TextAction:
                return <TextActionView action={action as TextAction} />;

            default:
                return <p>Unknown action type</p>;
        }
    }
}

export default ActionView;