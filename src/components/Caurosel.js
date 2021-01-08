import React from 'react'
import cap2 from "../img/capabilty_2.jpg"
import cap3 from "../img/capabilty_3.jpg"
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../css/home.module.css"
import { Link } from "react-router-dom"
import Slide from './Slide';



export default function Caurosel() {
    return (
        <div>
            <Container className="pt-3">
                <Row>
                    <Col lg={6} className="p-3">
                        <div className="p-5">
                            {/* <p className=" fs-5">About US</p> */}
                            <h2>Our Capabilities</h2>
                            <div className="pb-4 pr-4 pt-3">
                                Life care is poised and able to supply the demands of
                                industrial and commercial end users of raw commodities
                                such as millet, maize and sorghum and of processed
                                sorghum malt.<br /><br />
                                We have the full financial support and backing of our
                                shareholders and all listed facilities and equipment are fully
                                owned and un-encumbered.
                            </div>
                            <Link to="/about">
                                <Slide>
                                    <Button className={styles.mainDivButton} >
                                        Learn More
                                    </Button>
                                </Slide>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={cap2} class="d-block w-100" style={{ height: "25rem" }} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={cap3} class="d-block w-100" style={{ height: "25rem" }} alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
