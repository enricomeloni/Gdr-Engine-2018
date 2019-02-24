import * as React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

import Character from "../../models/Character";
import Action from "../../models/Action";

import ActionView from "./ActionView";
import Button from "reactstrap/lib/Button";
import Input from "reactstrap/lib/Input";
import Form from "reactstrap/lib/Form";

interface IProps {
    ownCharacter: Character;
    actions: Action[];
}

class Chat extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {

        const character = this.props.ownCharacter;

        const actionViews = this.props.actions.map((action, index) =>
            <ActionView action={action} key={index} />
        );

        return (
            <Container>
                <Row>
                    {actionViews}
                </Row>
                <Row>
                    <Form>
                        <Col md={5}>
                            <Input></Input>
                        </Col>
                        <Col>
                            <Button>Send</Button>
                        </Col>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default Chat;