import React from "react";
import usePushNotifications from "../pushNotifications/usePushNotifications";
import {Button, Card} from "react-bootstrap"

const Loading = ({ loading }) => (loading ? <div className="app-loader">Please wait, we are loading something...</div> : <br/>);
const Error = ({ error }) =>
    error ? (
        <section className="app-error">
            <h2>{error.name}</h2>
            <p>Error message : {error.message}</p>
            <p>Error code : {error.code}</p>
        </section>
    ) : null;

export default function RequestPushNotifications({setWantsPushNotification}) {
    const {
        userConsent,
        pushNotificationSupported,
        userSubscription,
        onClickAskUserPermission,
        onClickSubscribeToPushNotification,
        onClickSendSubscriptionToPushServer,
        pushServerSubscriptionId,
        onClickSendNotification,
        error,
        loading
    } = usePushNotifications();


    const isConsentGranted = userConsent === "granted";

    //If not supported by browser, don't ask
    if(!pushNotificationSupported) {
        const f= async ()=>setWantsPushNotification(false);
        f();
        return <></>;
    }

    //Run the various steps to register to push server
    if(!loading){
        //Check if the user has granted the permission and we didn't already get the userSubscription to send to server
        if(isConsentGranted && !userSubscription)
            onClickSubscribeToPushNotification();
        //Check if we have already the userSubscription but we haven't already sent it to to the server
        if(userSubscription && !pushServerSubscriptionId){
            onClickSendSubscriptionToPushServer();
        }
    }

    return (
        <main>
            <Card className="text-center">
                <Card.Header>Avviso</Card.Header>
                <Card.Body>
                    <Card.Title>Vuoi attivare le notifiche push?</Card.Title>
                    <Card.Text>
                        <Loading loading={loading} />
                        <Button variant="primary" disabled={loading || isConsentGranted} onClick={onClickAskUserPermission}>
                            Si
                        </Button>{' '}
                        <Button variant="secondary" disabled={loading || isConsentGranted} onClick={()=>setWantsPushNotification(false)}>
                            No
                        </Button>
                        <Error error={error} />
                        <br/>
                        {pushServerSubscriptionId && (
                            <div>
                                <p>The server accepted the push subscription!</p>
                                <Button variant="primary" onClick={onClickSendNotification}>Manda notifica</Button>
                            </div>
                        )}
                        <br/>
                        {userSubscription &&
                            <section>
                                <h4>Your notification subscription details</h4>
                                <pre>
                                    <code>{JSON.stringify(userSubscription, null, " ")}</code>
                                </pre>
                            </section>
                        }
                    </Card.Text>
                    <Button variant="primary" hidden={!pushServerSubscriptionId} onClick={()=>setWantsPushNotification(true)}>
                        Torna alla Homepage
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted">Message by HKN</Card.Footer>
            </Card>
        </main>
    );
}
