import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import CharacterStats from "./CharacterStats";

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
                <Row className={'justify-content-center'}>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                {this.props.character.name} - Character Sheet
                            </CardHeader>
                            <CardBody>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.character.character,
        stats: state.character.characteristics
    }
};

export default connect(
    mapStateToProps,
    null
)(CharacterSheet)
