import * as React from "react";
import Action from "../../models/Action";
import TextAction from "../../models/TextAction";

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

        //todo: find a way to determine type
        if (action instanceof TextAction || true)
            return <TextActionView action={action as TextAction}/>;
        else
            return <p>Unknown action type</p>;
    }
}

export default ActionView;