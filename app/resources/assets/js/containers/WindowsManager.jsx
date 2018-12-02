import React, {Component} from 'react';
import {connect} from "react-redux";
import {ActiveWindow} from '../components/ActiveWindow';
import {closeActiveWindow} from "../actions/activeWindows";

import {Map} from 'immutable'

class WindowsManager extends Component {
    render() {
        console.log('rendering');
        let activeWindowsMap = this.props.activeWindows;

        if(activeWindowsMap.size === 0)
            return null;

        let activeWindows = activeWindowsMap.map(
            (value, key) => {

                    let onCloseButtonClick = this.props.closeWindow.bind(this, key);

                    return (<ActiveWindow
                        title={value.title}
                        id={key}
                        key={key}
                        onCloseButtonClick={onCloseButtonClick}
                    >
                        {value.body}
                    </ActiveWindow>
            )}
        );

        return (
            <div>
                { activeWindows.toList() }
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
