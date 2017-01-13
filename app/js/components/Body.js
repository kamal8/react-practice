import React from "react";

export default class Body extends React.Component {
    constructor () {
        super();
        this.state = {
            name: "Hassan Kamal"
        };
    }
    render() {
        setTimeout(()=> {
            this.setState({name: this.props.name})
        },5000)
        return (
            <h1>this is {this.state.name}</h1>
        );
    }
}