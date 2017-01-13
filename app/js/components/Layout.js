import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Hassan kamal";
    }
    render () {
        return (
            <div>
                <Header></Header>
                    <h2>This is {this.name}</h2>
                <Footer></Footer>
            </div>
        );
    }
}