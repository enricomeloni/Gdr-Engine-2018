import * as React from "react";
import { Col, Container, Progress, Row } from "reactstrap";
import Characteristics from "../models/Characteristics"

interface IProps {
    characteristics: Characteristics
}

class Resources extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {

        const characteristics = this.props.characteristics;
        return (
            <Container>
                <Row className="mb-1">
                    <Col>
                        <Progress value={characteristics.health} color="success">Health</Progress>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <Progress value={characteristics.mana}>Mana</Progress>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resources;