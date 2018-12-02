import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import CharacterStats from "./CharacterStats";
import Draggable from 'react-draggable'

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import {connect} from "react-redux";

export class CharacterSheet extends Component {


    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={5}>
                        <img src="img/unknown.jpg" className="img-fluid" alt="test"/>
                    </Col>
                    <Col md={'auto'}>
                        <CharacterStats stats={this.props.character.characteristics}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Created at {this.props.character.created_at }
                    </Col>
                </Row>
            </Container>
        );
    }
}
