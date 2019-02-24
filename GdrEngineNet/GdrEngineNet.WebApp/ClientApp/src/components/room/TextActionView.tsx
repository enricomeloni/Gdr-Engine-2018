import * as React from "react";
import Action from "../../models/Action";
import TextAction from "../../models/TextAction";


interface IProps {
    action: TextAction;
}

class TextActionView extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {characterId, text, tag} = this.props.action;
        
        return (
            <div>
                <p>
                    {`Player ${characterId} [${tag}]: ${text}`}
                </p>
            </div>
        );
    }
}

export default TextActionView;