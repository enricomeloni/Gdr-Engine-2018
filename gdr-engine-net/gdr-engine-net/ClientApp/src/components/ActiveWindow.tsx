import * as React from "react";
import Draggable from "react-draggable";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"

interface IProps {
    title: string;
    id: number;
    key: number;
    onCloseButtonClick: Function;
}

interface IState {
    windowId: number;
    collapsed: boolean;
}

class ActiveWindow extends React.Component<IProps, IState> {
    onCloseButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMinifyButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    

    constructor(props) {
        super(props);
        this.state = {
            windowId: this.props.id,
            collapsed: false
        };

        this.onCloseButtonClick = this.props.onCloseButtonClick.bind(this);
        this.onMinifyButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            this.setState(
                (state) => ({ ...state, collapsed: !state.collapsed })
            );
        }
        
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Draggable handle=".handle">
                            <Card>
                                <CardHeader className="handle">
                                    <Row className="align-items-center">
                                        <Col>
                                            {this.props.title}
                                        </Col>

                                        <Col className="d-flex justify-content-end">

                                            <Button
                                                className="btn-info btn-sm ml-1"
                                                onClick={this.onMinifyButtonClick}
                                            >
                                                _
                                            </Button>
                                            <Button
                                                className="btn-danger btn-sm ml-1"
                                                onClick={this.onCloseButtonClick}
                                            >
                                                X
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                {
                                    this.state.collapsed ? null : (
                                        <CardBody>
                                            {this.props.children}
                                        </CardBody>
                                    )
                                }
                            </Card>
                        </Draggable>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default ActiveWindow;