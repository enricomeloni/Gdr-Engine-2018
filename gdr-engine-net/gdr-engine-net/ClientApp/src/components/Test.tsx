import * as React from 'react';

interface Props {
    test?: string
}

class Test extends React.Component<Props, {}> {
    render() {
        return <span> {this.props.test} </span>
    }
}

export default Test;