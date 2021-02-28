import React from "react";
import API from "../api/api.js"

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        API.getPublicInfo().then((info)=>this.setState({text: info.msg})).catch((err)=>console.log(err));
    }

    render() {
        return(
            <main>
                <h1>This is the homepage</h1>
                <p>
                    {this.state.text}
                </p>
            </main>
        );
    }
}

export default Homepage;
