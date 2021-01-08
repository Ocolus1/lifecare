import React from 'react'
import vid from "../img/vid_1.mp4"
import { Container, Row, Col } from "react-bootstrap";
import founder from "../img/founders_pic.jpg"

export default function Team() {
    return (
        <div>
            <Container className="pt-5">
                <Row>
                    <Col lg={6}>
                        <div className="text-center">
                            <video width="100%" height="400" controls>
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                    <Col lg={6} className="p-3">
                        <div className="p-5 mt-3">
                            <h2>Meet the Dream Team</h2>
                            <div className="pb-4 pr-4 pt-3">
                                Lifecare is blessed with a Board of Directors made up of
                                eminent individuals who have distinguished themselves in
                                commerce and industry and a committed management
                                team comprising a crop of experienced and proven
                                professionals who want to take their strategy to the next level.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-5 mt-5">
                    <Col lg={6} className="p-3">
                        <div className="p-5 mt-3">
                            <h2>Manager's Note</h2>
                            <div className="pb-4 pr-4 pt-3">
                                Before you feel tempted to click on one of our great services, 
                                you may want to know why we at Intelliversity seem to care so 
                                much about your business. In our eyes, you're a hero. 
                                We care about mankind and hope to make the future better.
                            </div>
                            <p>MD: Lanre Ogunbajo</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text-center">
                            <img src={founder}
                                alt="founder pic"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
