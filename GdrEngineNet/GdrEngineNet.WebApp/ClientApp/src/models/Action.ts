﻿import Character from "./Character";

export default class Action {
    constructor(id: number, characterId: number, roomId: number)
    {
        this.id = id;
        this.characterId = characterId;
        this.roomId = roomId
    }

    id: number;
    characterId: number;
    roomId: number;
}