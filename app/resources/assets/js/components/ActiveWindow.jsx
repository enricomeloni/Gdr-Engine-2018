import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import CharacterStats from "./CharacterStats";
import Draggable from 'react-draggable'

import {Container, Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap'
import {connect} from "react-redux";
import {closeActiveWindow} from "../actions/activeWindows";

export class ActiveWindow extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            windowId: this.props.id,
            collapsed: false
        };

        this.onCloseButtonClick = this.props.onCloseButtonClick.bind(this);
        this.onMinifyButtonClick = () => {
            this.setState(
                (state) => ({...state, collapsed: !state.collapsed})
            )
        }
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
                                        <Col>
                                            { this.props.title }
                                        </Col>

                                        <Col className="d-flex justify-content-end">

                                            <Button
                                                className="btn-info btn-sm ml-1"
                                                onClick={this.onMinifyButtonClick}
                                            >
                                                _
                                            </Button>
                                            <Button
                                                className="btn-danger btn-sm ml-1"
                                                onClick={this.onCloseButtonClick}
                                            >
                                                X
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                {
                                    this.state.collapsed ? null : (
                                        <CardBody>
                                            {this.props.children}
                                        </CardBody>
                                    )
                                }
                            </Card>
                        </Draggable>
                    </Col>
                </Row>
            </Container>
        );
    }
}
