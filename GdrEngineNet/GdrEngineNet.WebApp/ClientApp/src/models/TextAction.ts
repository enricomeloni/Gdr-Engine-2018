import Action from "./Action";

export default class TextAction extends Action {
    constructor(params : TextAction)
    {
        super(params.id, params.characterId, params.roomId);
        this.text = params.text;
        this.tag = params.tag;
    }

    text: string;
    tag: string;
}