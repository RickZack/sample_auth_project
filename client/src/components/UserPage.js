import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../api/api.js"

function UserPage(props){
    const { user } = useAuth0();

    return(
            <main>
                <h1>This is the user profile page</h1>
                <p>
                    Auth. information: <br/>
                    {JSON.stringify(user)}
                </p>
                <p>
                    Result of getUserInfo:

                </p>
            </main>
        );
}

export default withAuthenticationRequired(UserPage, {
    onRedirecting: () => <p>Loading</p>,
});
