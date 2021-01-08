import React from 'react'
import map from "../img/map_pic.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container} from "react-bootstrap"

export default function OfficeContact() {
    return (
        <div>
            <Container>
                <div className="row pt-5">
                    <div className="col-md-6 p-0"
                        style={{
                            backgroundColor: "#EAEAEA"
                        }}
                    >
                        <div className="p-5">
                            <h2>Office Contacts</h2>
                            <p className="text-wrap" style={{ width: "25rem" }}>
                                Malting services, Grain handling, Grain Cleaning,
                                full Analytical services and many more. Contact us today.
                            </p>
                            <p className="row">
                                <p className="col-1">
                                    <FontAwesomeIcon icon={["fas", "map-marked-alt"]} />
                                </p>
                                <p className="col-11">
                                    Life Care Limited, Ogundipe Gra Road, Ota <br />
                                    <strong>OGUN STATE, NIGERIA.</strong>
                                </p>
                            </p>
                            <p className="row">
                                <p className="col-1">
                                    <FontAwesomeIcon icon={["fas", "mobile"]} />
                                </p>
                                <p className="col-11">
                                    234-01295586<br />
                                    <strong>info@lcvltd.com</strong>
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <img src={map} alt="..."
                            style={{
                                width: "100%",
                                height: "25rem"
                            }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
