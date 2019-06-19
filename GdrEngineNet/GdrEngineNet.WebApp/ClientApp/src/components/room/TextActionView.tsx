import * as React from "react";
import { Action } from "../../models/Action";
import { TextAction } from "../../models/TextAction";
import { Character } from "../../models/Character";


interface IProps {
    action: TextAction;
    author: Character;
}

class TextActionView extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        //const { characterId, text, tag } = this.props.action;
        //console.log(this.props.action);
        //console.log(this.props.action.characterId);

        return (
            <div>
                <p>
                    {this.props.author.fullName()}: [{this.props.action.tag}] {this.props.action.text}
                </p>
            </div>
        );
    }
}

export default TextActionView;