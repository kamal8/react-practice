import React from "react";

export default class Title extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <h1>Hello {this.props.title}</h1>
        )
    }
}