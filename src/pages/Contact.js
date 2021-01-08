import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Form, Col, Button, Row } from "react-bootstrap"
import OfficeContact from "../components/OfficeContact"
import Slide from '../components/Slide'
import { useForm } from "react-hook-form"
// import axios from "axios"


library.add(fab, far, fas)


export default function Contact() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        try {
            const result = await fetch("https://lifecare.pythonanywhere.com/view/api/", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            alert("Your request has been received")
            console.log(result)
        } catch(err){
            console.log("An error occurred");
        }
    }

    return (
        <div>
            <div className="p-5 mb-3"
            >
                <div className="text-center p-3">
                    <h1 className="fs-1">Contact</h1>
                    <p>Factory, Industrial theme &rarr; Contact</p>
                </div>
            </div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="p-4">
                            <h1 className="pb-5">Call Us or Fill the form</h1>
                            <p className="row">
                                <p className="col-1">
                                    <FontAwesomeIcon icon={["fas", "mobile"]} />
                                </p>
                                <p className="col-11">
                                    <strong>234-01295586</strong>
                                    <p className="lead">Don't hesitate to contact us.</p>
                                </p>
                            </p>
                            <p className="row">
                                <p className="col-1">
                                    <FontAwesomeIcon icon={["fas", "map-marked-alt"]} />
                                </p>
                                <p className="col-11">
                                    <strong>Working Time</strong>
                                    <p className="lead">
                                        Mon-Fri: 9:00 - 17:00 / Closed on<br /> weekends
                                    </p>
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <Row>
                                    <Col>
                                        <Form.Control ref={register} name="name"
                                            type="text" placeholder="Name"
                                            size="lg"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control ref={register} name="company"
                                            type="text" placeholder="Company"
                                            size="lg"
                                        />
                                    </Col>
                                </Row>
                            </Form.Row>
                            <Form.Row className="mt-4">
                                <Row>
                                    <Col>
                                        <Form.Control ref={register} name="email"
                                            type="email" placeholder="Email address"
                                            size="lg"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control ref={register} name="phone"
                                            type="text" placeholder="Phone"
                                            size="lg"
                                        />
                                    </Col>
                                </Row>
                            </Form.Row>
                            <Form.Row className="mt-4">
                                <Form.Control ref={register} name="body" as="textarea"
                                    placeholder="How can we help you?" rows={3}
                                    size="lg"
                                />
                            </Form.Row>
                            <Form.Row>
                                <Slide>
                                    <Button
                                        style={{
                                            width: "100%",
                                            padding: ".5rem",
                                            fontSize: "120%",
                                            backgroundColor: "#FF006E",
                                            border: "none",
                                            marginTop: "2rem"
                                        }}
                                        size="lg"
                                        type="submit"
                                        name="submit"
                                    >Submit</Button>
                                </Slide>
                            </Form.Row>
                        </Form>
                    </div>
                </div>
            </div>
            <div>
                <OfficeContact />
            </div>
        </div>
    )
}
