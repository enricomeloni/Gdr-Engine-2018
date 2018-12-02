import React, {Component} from 'react';
import {connect} from "react-redux";
import {ActiveWindow} from '../components/ActiveWindow';
import {closeActiveWindow} from "../actions/activeWindows";

class WindowsManager extends Component {
    render() {
        console.log('rendering');
        let activeWindowsMap = Object.entries(this.props.activeWindows);
        if(activeWindowsMap.length === 0)
            return null;
        
        let activeWindows = activeWindowsMap.map(
            ([k, v]) => {

                    let onCloseButtonClick = this.props.closeWindow.bind(this, k);

                    return (<ActiveWindow
                        title={v.title}
                        id={k}
                        key={k}
                        onCloseButtonClick={onCloseButtonClick}
                    >
                        {v.body}
                    </ActiveWindow>
            )}
        )

        return (
            <div>
                { activeWindows }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeWindows: state.activeWindows.windowsMap
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        closeWindow: (windowId) => {dispatch(closeActiveWindow(windowId))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WindowsManager);
