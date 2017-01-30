import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default class Layout extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div>
                <Header></Header>
                <Navigation></Navigation>
                <Footer></Footer>
            </div>
        );
    }
}