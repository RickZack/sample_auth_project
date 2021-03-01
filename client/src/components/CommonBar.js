import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { useAuth0 } from "@auth0/auth0-react";

function TopBar(props){
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });

    return (
                <>
                    <Nav className="ml-auto pr-3">
                        <Link to={"/"} className={"nav-link"}>Homepage</Link>
                        {isAuthenticated && <Link to={"/profile"} className={"nav-link"}>Profile</Link>}
                    </Nav>

                    {
                        isAuthenticated &&  <Button onClick={()=>logoutWithRedirect()} variant="outline-light">Logout</Button>
                    }
                    {
                        !isAuthenticated &&  <Button onClick={()=>loginWithRedirect()} variant="outline-light">Login</Button>
                    }
                </>
    );
}

function CommonBar(props){
    return (
        <>
            <Navbar bg="primary" variant={"dark"}>
                <Navbar.Brand as={Link} to={"/"}>
                    <Image src={"https://hknpolito.org/wp-content/uploads/2018/05/hkn_logo_blu.png"} height={"55px"}/>
                </Navbar.Brand>
                <TopBar/>
            </Navbar>
        </>
    );
}

export default CommonBar;
