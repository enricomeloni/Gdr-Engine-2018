import * as React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

import Character from "../../models/Character";
import Action from "../../models/Action";

import ActionView from "./ActionView";
import Button from "reactstrap/lib/Button";
import Input from "reactstrap/lib/Input";
import Form from "reactstrap/lib/Form";
import { connect } from "react-redux";
import { List } from "immutable";

export interface IProps {
    ownCharacter: Character;
    actions: List<Action>;
    submitNewAction: (tag: string, text: string) => void;  
}

export interface IState {
    tag: string;
    text: string;
}

export class Chat extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    onSubmit() {
        this.props.submitNewAction(this.state.tag, this.state.text);
    }

    onTagChange(event) {
        this.setState({ ...this.state, tag: event.target.value });
    }

    onTextChange(event) {
        this.setState({ ...this.state, text: event.target.value });
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
                        <Col md={2}>
                            <Input id="tag" name="tag" onChange={this.onTagChange}>
                                {this.state.tag}
                            </Input>
                        </Col>
                        <Col md={5}>
                            <Input id="tag" name="text" onChange={this.onTextChange} onSubmit={this.onSubmit}>
                                {this.state.text}
                            </Input>
                        </Col>
                        <Col>
                            <Button onClick={this.onSubmit}>Send</Button>
                        </Col>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default Chat;