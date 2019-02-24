import { connect } from "react-redux";
import { IState } from "../reducers/RoomReducer";
import { addAction } from "../actions/RoomActions";
import TextAction from "../models/TextAction";
import Chat from "../components/room/Chat";
import Character from "../models/Character";
import Characteristics from "../models/Characteristics";

const mapStateToProps = (state) => {
    return {
        actions: state.room.actions,
        ownCharacter: new Character({
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
        submitNewAction: (tag: string, text: string) => {
            const textAction: TextAction = {
                characterId: 1,
                id: 10,
                roomId: 2,
                tag: tag,
                text: text
            };
            dispatch(addAction(textAction));
        }
    }
}

const Room = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

export default Room;