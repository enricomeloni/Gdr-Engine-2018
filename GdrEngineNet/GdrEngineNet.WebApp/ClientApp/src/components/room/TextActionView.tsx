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
        //const { characterId, text, tag } = this.props.action;
        console.log(this.props.action);
        console.log(this.props.action.characterId);
        
        return (
            <div>
                <p>
                    Player {this.props.action.characterId} [{this.props.action.tag}]: {this.props.action.text}
                </p>
            </div>
        );
    }
}

export default TextActionView;