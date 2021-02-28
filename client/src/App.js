import React from "react";
import './App.css';
import {Route} from "react-router-dom"
import {Switch} from 'react-router';
import {Helmet} from "react-helmet";
import {AuthContext} from "./components/AuthContext"
import CommonBar from "./components/CommonBar"
import Homepage from "./components/Homepage";
import UserPage from "./components/UserPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    logout = () => {
        //Perform proper logout using Auth0
        this.setState({authUser: null});
    }

    login = () => {
        //Retrieve data from Auth0 login
        const user={username: "Sample User"}
        this.setState({authUser:user});
    }

    render() {
        const value = {
            authUser: this.state.authUser,
            loginUser: this.login,
            logoutUser: this.logout
        }
        return (
            <AuthContext.Provider value={value}>
                <CommonBar/>
                <Switch>
                    <Route path={"/profile"}>
                        <Helmet><title>User Profile</title></Helmet>
                        <UserPage />
                    </Route>
                    <Route path={"/"}>
                        <Helmet><title>Homepage</title></Helmet>
                        <Homepage/>
                    </Route>
                </Switch>
            </AuthContext.Provider>
        );
    }
}

export default App;
