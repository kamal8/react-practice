import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export default class Layout extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div>
                <Header></Header>
                <Body name={"Will Smith"}></Body>
                <Footer></Footer>
            </div>
        );
    }
}