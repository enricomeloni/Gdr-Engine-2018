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

        if(action instanceof TextAction)
            return <TextActionView action={action} />
        else
            return <p>Unknown action type</p>
    }
}

export default ActionView;