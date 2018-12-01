import React, {Component} from 'react';
import {connect} from "react-redux";

class WindowsManager extends Component {
    render() {
        console.log('rendering');
        let activeWindows = Object.values(this.props.activeWindows);
        if(activeWindows.length === 0)
            return null;
        return (
            activeWindows
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
