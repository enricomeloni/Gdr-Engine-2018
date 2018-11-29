import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import CharacterStats from "./CharacterStats";

export default class CharacterSheet extends Component {


    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">{this.props.user} - Character Sheet</div>

                            <div className="card-body container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="img/unknown.jpg" className="img-fluid" alt="test"/>
                                    </div>
                                    <div className="col-md">
                                        <CharacterStats stats={this.props.stats}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

