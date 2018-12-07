import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import CharacterStats from "./CharacterStats";
import Draggable from 'react-draggable'

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import {connect} from "react-redux";
import Resources from "./Resources";

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
                        <img src="img/unknown.png" className="img-fluid" alt="test"/>
                    </Col>
                    <Col md={'auto'}>
                        <CharacterStats character={this.props.character}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Resources character={this.props.character}/>
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
