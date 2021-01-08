import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../img/logo.png";
import styles from "../css/home.module.css"


export default function Footer() {
    return (
        <div className="pt-5 "

        >
            <Container>
                <div className="row mb-5">
                    <div className="col-4 d-inline ml-4">
                        <img src={logo}
                            className="img-fluid"
                            style={{ width: 100, height: 60 }}
                            alt="logo"
                        />
                    </div>
                    <div className="col-8 d-inline text-end">
                        <div className="d-inline  mx-2">
                            <Link to="/services">
                                <Button className={styles.mainDivButton} >
                                    Services &rarr;
                                </Button>
                            </Link>
                        </div>
                        <div className="d-inline mx-2">
                            <Link to="/contact">
                                <Button className={styles.mainDivButton} >
                                    Contact Us &rarr;
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="row"

            >
                <div className="container p-5">
                    <div className="row p-5">
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-4 text-center">
                            <div>
                                <h5>MENU</h5><hr />
                                <div className="pt-2">
                                    <Link className="d-inline nav-link text-dark" to="/">Home</Link>
                                    <Link className="d-inline nav-link text-dark" to="/about">About</Link>
                                    <Link className="d-inline nav-link text-dark" to="/services">Services</Link><br />
                                    <Link className="d-inline nav-link text-dark" to="/statement">Statement</Link>
                                    <Link className="d-inline nav-link text-dark" to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 col-sm-6 col-xs-12 text-center">
                            <div>
                                <h5>ADDRESS</h5><hr />
                                <div className="pt-2">
                                    Life Care Limited, Ogundipe Gra Road, Ota <br />
                                    <strong>OGUN STATE, NIGERIA.</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 col-xs-12 text-center">
                            <div>
                                <h5>Contacts</h5><hr />
                                <div className="pt-2">
                                    234-01295586<br />
                                    <strong>info@lcvltd.com</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark text-white text-center py-3 ">
                    Designed by &copy;cypherspot 2020
                </div>
            </div>
        </div>
    )
}
