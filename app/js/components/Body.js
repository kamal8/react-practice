import React from "react";

export default class Body extends React.Component {
    constructor () {
        super();
    }
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {
        return (
            <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} class="form-control"/>
        );
    }
}