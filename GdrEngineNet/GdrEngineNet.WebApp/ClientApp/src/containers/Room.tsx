import { connect } from "react-redux";
import { IState } from "../reducers/RoomReducer";
import { addActionRequest, updateChatRequest } from "../actions/RoomActions";
import { TextAction } from "../models/TextAction";
import Chat from "../components/room/Chat";
import Character from "../models/Character";
import Characteristics from "../models/Characteristics";
import { Action } from "../models/Action"

const mapStateToProps = (state) => {
    return {
        actions: state.room.actions,
        id: 2,
        ownCharacter: new Character({
            id: 2,
            firstName: "Raffaele",
            middleName: "Babbeus",
            lastName: "Zippo",
            characteristics: {
                strength: 40,
                toughness: 30,
                agility: 40,
                intelligence: 30,
                willpower: 40,
                influence: 30,
                health: 40,
                mana: 70
            } as Characteristics,
            createdAt: new Date(2018, 5, 12, 12, 43, 20)
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewAction: (textAction: TextAction) => {
            dispatch(addActionRequest(textAction));
        },
        updateActions: (room: number) => {
            dispatch(updateChatRequest(room))
        }
    }
}

const Room = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

export default Room;