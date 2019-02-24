import * as React from "react";
import CharacterStats from "./CharacterStats";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import Resources from "./Resources";
import Character from "../models/Character";

interface IProps {
    character: Character;
}

class CharacterSheet extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {

        const character = this.props.character;
        return (
            <Container>
                <Row>
                    <Col md={5}>
                        <img src="img/unknown.png" className="img-fluid" alt="test" />
                    </Col>
                    <Col md={'auto'}>
                        <CharacterStats characteristics={character.characteristics} />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Resources characteristics={character.characteristics} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Created at {character.createdAt.toLocaleString()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CharacterSheet;