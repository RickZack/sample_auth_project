import React, {useState} from "react";
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./auth/history";
import CommonBar from "./components/CommonBar"
import Homepage from "./components/Homepage";
import UserPage from "./components/UserPage";
import RequestPushNotifications from "./components/RequestPushNotifications"
import usePushNotifications from "./pushNotifications/usePushNotifications";

const App = ()=>{
        const { isLoading, isAuthenticated, error } = useAuth0();
        const [wantsPushNotification, setWantsPushNotification]=useState(null);
        const {userConsent}=usePushNotifications();
        const showReq= isAuthenticated && (userConsent==="default" && wantsPushNotification===null)

        console.log(showReq, isAuthenticated, userConsent, wantsPushNotification);
        if (error) {
            return <div>Oops... {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <Router history={history}>
                <CommonBar/>
                {showReq && <RequestPushNotifications setWantsPushNotification={setWantsPushNotification}/>}
                {!showReq
                &&
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
                }
            </Router>
        );
}

export default App;
