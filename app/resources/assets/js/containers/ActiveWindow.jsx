import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "../components/Example";
import CharacterStats from "../components/CharacterStats";
import Draggable from 'react-draggable'

import {Container, Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap'
import {connect} from "react-redux";
import {closeActiveWindow} from "../actions/activeWindows";

export class ActiveWindow extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            windowId: this.props.id
        };

        this.onCloseButtonClick = () => (this.props.dispatch(closeActiveWindow(this.state.windowId)));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Draggable>
                            <Card>
                                <CardHeader>
                                    <Row className="align-items-center">
                                        <Col>{ this.props.title }</Col>
                                        <Col md={2}>
                                            <Button className="float-right btn-danger" onClick={this.onCloseButtonClick}> X </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    { this.props.children }
                                </CardBody>
                            </Card>
                        </Draggable>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};


export default connect(
    null,
    mapDispatchToProps
)(ActiveWindow)
