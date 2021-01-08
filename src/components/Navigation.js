import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from "../img/logo.png";
import styles from "../css/nav.module.css"
import { NavLink } from "react-router-dom"

library.add(fab)

export default function Navigation() {
    return (
        <div className={styles.top}>
            {/* <div className="row align-items-center bg-dark">
                <div className="col-md-6 d-inline">
                    <p className="d-inline p-3 text-white">
                        <a className="text-white" href="#">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                        </a>
                    </p>
                    <p className="d-inline p-3 text-white">
                        <a className="text-white" href="#">
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </a>
                    </p>
                    <p className="d-inline p-3 text-white">
                        <a className="text-white" href="#">
                            <FontAwesomeIcon icon={["fab", "youtube"]} />
                        </a>
                    </p>
                    <p className="d-inline p-3 text-white">
                        <a className="text-white" href="#">
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </a>
                    </p>
                </div>
                <div className="col-md-6 align-items-center ">
                    <p className="text-white text-end pt-2 pr-3">Office no: 234-1-7737692</p>
                </div>
            </div> */}
            <Navbar className="shadow  p-0" expand="lg">
                <Navbar.Brand href="/" className="px-5">
                    <img src={logo}
                        className="img-fluid"
                        style={{ width: 100, height: 60 }}
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto px-5">
                        <NavLink
                            exact to="/"
                            className={styles.darktext}
                            activeStyle={{
                                color: "black",
                                "border-bottom": "1px solid #FF006E"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={styles.darktext}
                            to="/about"
                            activeStyle={{
                                color: "black",
                                "border-bottom": "1px solid #FF006E"
                            }}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={styles.darktext}
                            activeStyle={{
                                color: "black",
                                "border-bottom": "1px solid #FF006E"
                            }}
                        >Services
                        </NavLink>
                        <NavLink
                            to="/statement"
                            className={styles.darktext}
                            activeStyle={{
                                color: "black",
                                "border-bottom": "1px solid #FF006E"
                            }}
                        >Statement
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={styles.darktext}
                            activeStyle={{
                                color: "black",
                                "border-bottom": "1px solid #FF006E"
                            }}
                        >
                            Contact
                        </NavLink>
                    </Nav>
                    <Nav className={styles.navright}>
                        <Nav.Link href="/contact" className="p-0">
                            <span className=" text-white">
                                Get a Quote &rarr;
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
