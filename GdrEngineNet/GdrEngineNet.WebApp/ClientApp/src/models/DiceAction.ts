import { Action, ActionType } from "./Action";

export interface IDiceActionProps {
    characterId: number,
    id: number,
    roomId: number,
    rolledDice: number,
    result: number,
    characteristic: string,
    characteristicValue: number;
}

export class DiceAction extends Action implements IDiceActionProps {
    constructor(props: IDiceActionProps) {
        super(props.id, props.characterId, props.roomId);

        this.actionType = ActionType.DiceAction;
        this.rolledDice = props.rolledDice;
        this.result = props.result;
        this.characteristic = props.characteristic;
        this.characteristicValue = props.characteristicValue;
    }

    rolledDice: number;
    result: number;
    characteristic: string;
    characteristicValue: number;
}