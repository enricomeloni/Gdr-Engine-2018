import React, {Component} from 'react';
import {Col, Container, Progress, Row} from "reactstrap";

class Resources extends Component {

    constructor(props)
    {
        super(props);
    }


    render() {
        return (
            <Container>
                <Row className="mb-1">
                    <Col>
                        <Progress value={this.props.character.health} color="success">Health</Progress>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <Progress value={this.props.character.mana}>Mana</Progress>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resources;
