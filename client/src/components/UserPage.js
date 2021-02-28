import React from "react";
import {AuthContext} from "./AuthContext";
import API from "../api/api.js"

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        API.getUserInfo(1).then((user)=>this.setState({userInfo:user}))
            .catch((err)=>console.log(err));
    }

    render(){
        return(
            <AuthContext.Consumer>
                {(context)=>(
                    <main>
                        <h1>This is the user profile page</h1>
                        <p>
                            Auth. information:
                            {JSON.stringify(context.authUser)}
                        </p>
                        <p>
                            Result of getUserInfo:
                            {JSON.stringify(this.state.userInfo)}
                        </p>
                    </main>
                )}</AuthContext.Consumer>
        );
    }
}

export default UserPage;
