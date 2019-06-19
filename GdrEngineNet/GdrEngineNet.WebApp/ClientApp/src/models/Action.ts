export enum ActionType {
    TextAction = "TextAction",
    DiceAction = "DiceAction"
}

export class Action {
    constructor(id: number, characterId: number, roomId: number) {
        this.id = id;
        this.characterId = characterId;
        this.roomId = roomId;
    }

    actionType: ActionType;

    id: number;
    characterId: number;
    roomId: number;
}