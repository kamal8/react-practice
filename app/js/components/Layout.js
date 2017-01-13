import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Hassan kamal'
        };
    }
    changeTitle (title) {
        this.setState({title})
    }
    render () {
        return (
            <div>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}></Header>
                <Body title={this.state.title} changeTitle={this.changeTitle.bind(this)}></Body>
                <Footer></Footer>
            </div>
        );
    }
}