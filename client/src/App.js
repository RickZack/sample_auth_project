import React from "react";
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./auth/history";
import CommonBar from "./components/CommonBar"
import Homepage from "./components/Homepage";
import UserPage from "./components/UserPage";

const App = ()=>{
        const { isLoading, error } = useAuth0();

        if (error) {
            return <div>Oops... {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <Router history={history}>
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
            </Router>
        );
}

export default App;
