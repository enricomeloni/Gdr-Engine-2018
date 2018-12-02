import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "../components/Example";
import CharacterStats from "../components/CharacterStats";
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
                        <CharacterStats stats={this.props.stats}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        charactersMap: state.characters.charactersMap,
        characteristicsMap: state.characters.characteristicsMap
    }
}
