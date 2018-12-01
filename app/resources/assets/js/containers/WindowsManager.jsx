import React, {Component} from 'react';
import {connect} from "react-redux";
import {ActiveWindow} from './ActiveWindow';

class WindowsManager extends Component {
    render() {
        console.log('rendering');
        let activeWindowsMap = Object.entries(this.props.activeWindows);
        if(activeWindowsMap.length === 0)
            return null;
        
        let activeWindows = activeWindowsMap.map(
            ([k, v]) => (
                    <ActiveWindow
                        title={v.title}
                        id={k}
                        key={k}
                        dispatch={this.props.dispatch}
                    >
                        {v.body}
                    </ActiveWindow>
            )
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

export default connect(
    mapStateToProps,
    null
)(WindowsManager);
