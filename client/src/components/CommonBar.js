import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';
import Image from "react-bootstrap/Image";
import {AuthContext} from "./AuthContext";

function TopBar(props){
    return (
        <AuthContext.Consumer>
            {(context) => (
                <>
                    <Nav className="ml-auto pr-3">
                        <Link to={"/"} className={"nav-link"}>Homepage</Link>
                        {context.authUser && <Link to={"/profile"} className={"nav-link"}>Profile</Link>}
                    </Nav>

                    {
                        context.authUser &&  <Button onClick={()=>{context.logoutUser()}} variant="outline-light">Logout</Button>
                    }
                    {
                        !context.authUser &&  <Button onClick={()=>{context.loginUser()}} variant="outline-light">Login</Button>
                    }
                </>
            )}
        </AuthContext.Consumer>
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
