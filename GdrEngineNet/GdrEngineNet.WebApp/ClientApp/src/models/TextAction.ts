import { Action, ActionType } from "./Action";

export interface ITextActionProps {
    characterId: number,
    id: number,
    roomId: number,
    tag: string,
    text: string
}

export class TextAction extends Action implements ITextActionProps {
    constructor(props: ITextActionProps) {
        super(props.id, props.characterId, props.roomId);

        this.actionType = ActionType.TextAction;
        this.text = props.text;
        this.tag = props.tag;
    }

    text: string;
    tag: string;
}