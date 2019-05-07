import * as React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

import Character from "../../models/Character";
import { Action } from "../../models/Action";

import ActionView from "./ActionView";
import Button from "reactstrap/lib/Button";
import Input from "reactstrap/lib/Input";
import Form from "reactstrap/lib/Form";
import { connect } from "react-redux";
import { List } from "immutable";
import { TextAction } from "../../models/TextAction";

export interface IProps {
    ownCharacter: Character;
    actions: List<Action>;
    id: number;
    submitNewAction: (action: Action) => void;
    updateActions: (room: number) => void;
}

export interface IState {
    tag: string;
    text: string;
}

export class Chat extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            tag: "",
            text: ""
        }
    }

    onSubmit = () => {

        const textAction = new TextAction({
            id: null,
            characterId: this.props.ownCharacter.id,
            roomId: this.props.id,
            text: this.state.text,
            tag: this.state.tag 
        })

        this.props.submitNewAction(textAction);
    }

    onTagChange = (event) => {
        this.setState({ ...this.state, tag: event.target.value });
    }

    onTextChange = (event) => {
        this.setState({ ...this.state, text: event.target.value });
    }

    componentDidMount() {
        console.log("id: " + this.props.id);
        this.props.updateActions(this.props.id);
    }

    render() {

        const character = this.props.ownCharacter;
        const actionViews = this.props.actions.map((action, index) => {
            return (
                <Row key={index}>
                    <ActionView action={action} />
                </Row>);
        }
        );

        return (
            <Container>

                {actionViews}

                <Form>
                    <Row>
                        <Col md={2}>
                            <Input id="tag" name="tag" onChange={this.onTagChange} value={this.state.tag} />

                        </Col>
                        <Col md={5}>
                            <Input id="tag" name="text" onChange={this.onTextChange} onSubmit={this.onSubmit} value={this.state.text} />
                        </Col>
                        <Col>
                            <Button onClick={this.onSubmit}>Send</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default Chat;