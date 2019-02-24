import { connect } from "react-redux";
import { IState } from "../reducers/RoomReducer";
import { addAction } from "../actions/RoomActions";
import TextAction from "../models/TextAction";
import * as Chat from "../components/room/Chat";


const mapStateToProps = (state: IState ) => {
    return {
        actions: state.actions,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewAction: (tag: string, text: string) => {
            const textAction: TextAction = {
                characterId: 1,
                id: 10,
                roomId: 2,
                tag: "di notte",
                text: "volo"
            };
            dispatch(addAction(textAction));
        }
    }
}

