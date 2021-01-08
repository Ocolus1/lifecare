import React from 'react'
import { CardGroup, Card, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import styles from "../css/four.module.css"
import Caurosel from '../components/Caurosel'
import nig from "../img/nigeria_breweries_1.jpg"
import nestle from "../img/nestle_nig.jpg"
import guiness from "../img/Guinness-Nigeria-Plc.jpg"
import pabbo from "../img/pabbo_lim.jpg"

library.add(fab, far, fas)

export default function Services() {
    const paragh = {
        fontSize: "160%",
        fontWeight: 500
    }
    const font = {
        color: "#FF006E"
    }
    const clientImg = { width: "100%", height: "8rem" }
    return (
        <div>
            <div className="p-5 mb-3"
            >
                <div className="text-center p-3">
                    <h1 className="fs-1">Services</h1>
                    <p>Factory, Industrial theme &rarr; Services</p>
                </div>
            </div>
            <div>
                <div className="container">
                    <CardGroup className={styles.group_s}>
                        <Card className={styles.card}>
                            <p className={styles.icon}>
                                <FontAwesomeIcon style={font} icon={["far", "clipboard"]} size="3x" />
                            </p>
                            <Card.Body>
                                <Card.Title style={paragh}>
                                    Grain Storage &amp; Handling
                                </Card.Title>
                                <Card.Text>
                                    The bulk handling facilities are suited to higher volume
                                    industrial and commercial end-users such as brewers, food
                                    and beverage manufacturers and large feed millers and
                                    permit the effortless storage, handling &amp; cleaning of most
                                    grains...
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card}>
                            <p className={styles.icon}>
                                <FontAwesomeIcon style={font} icon={["fas", "people-arrows"]} size="3x" />
                            </p>
                            <Card.Body>
                                <Card.Title style={paragh}>
                                    Malting Services
                                </Card.Title>
                                <Card.Text>
                                    With the successful installation and commissioning of our
                                    modern steep plant, the new steep plant effectively
                                    doubles steeping capacity and incorporates new
                                    equipment which allows hitherto unattainable
                                    manufacturing standards.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.icon}>
                            <p className="px-5">
                                <FontAwesomeIcon style={font} icon={["far", "newspaper"]} size="3x" />
                            </p>
                            <Card.Body>
                                <Card.Title style={paragh}>
                                    Grain Cleaning
                                </Card.Title>
                                <Card.Text>
                                    We have been engaged with modern units for all our
                                    requirements of de-stoning, de-awning and grading grain
                                    in the most efficient way possible.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.card}>
                            <p className={styles.icon}>
                                <FontAwesomeIcon style={font} icon={["fab", "squarespace"]} size="3x" />
                            </p>
                            <Card.Body>
                                <Card.Title style={paragh}>
                                    Analytical Services
                                </Card.Title>
                                <Card.Text>
                                    Tender services come with a complementary full material
                                    analysis with a certificate of analysis issued by our fully
                                    equipped laboratory.
                                    We routinely test for a range of grain/malt quality and food
                                    safety parameters. See Appendix II for a list of parameters
                                    analyzed.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className="py-5 mb-5"
            >
                <Caurosel />
            </div>
            <div>
                <Container >
                    <div>
                        <div>
                            <h1 className="py-3">Composite Services</h1>
                            <div className="shadow p-3 py-5 mb-5 bg-white rounded">
                                <h4 className="py-3">Tender supply of clean and de-stoned grain</h4>
                                <div className="px-4">
                                    This involves the complete outsourcing of supply of mill-ready
                                    grain (cleaned, de-stoned) to nominated client sites over
                                    the contract period according to an agreed delivery
                                    schedule. Tender price covers all operations necessary to
                                    deliver grain within specification, on-time and in-full.
                                </div>
                            </div>
                            <div className="shadow p-3 py-5 mb-5 bg-white rounded">
                                <h4 className="py-3">Tender supply of high quality malted sorghum</h4>
                                <div className="px-4">
                                    This involves the complete outsourcing of supply of mill-ready
                                    malt (cleaned, dressed) to nominated client sites over the
                                    contract period according to an agreed delivery schedule.
                                    Tender price covers all operations necessary to deliver
                                    malt within specification, on-time and in-full.
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="p-3">
                                <h1 className="py-3">Why you should work with us.</h1>
                                <ul className="shadow p-3 mb-5 bg-white rounded list-group list-group-flush">
                                    <li className="list-group-item">
                                        Fixed annual contract prices: Greater cost control and
                                        better budget performance.
                                </li>
                                    <li className="list-group-item">
                                        Lower inventory costs: Higher asset turnover
                                        efficiencies as our services facilitate the operation of a
                                        lean just-in-time business model, lower cash outlays for
                                        purchase of raw materials.
                                </li>
                                    <li className="list-group-item">
                                        Fixed annual contract prices: Greater cost control and
                                        better budget performance.
                                </li>
                                    <li className="list-group-item">
                                        Greater flexibility in the use of client site storage space
                                </li>
                                    <li className="list-group-item">
                                        Reduced logistics cost: We can deliver in bulk thereby
                                        eliminating cost of packaging materials and manual
                                        labour, improve truck efficiencies &ammp; turnarounds to yield
                                        highly competitive transport costs.
                                </li>
                                    <l1 className="list-group-item">
                                        Our services come with a complementary full material
                                        analysis with a certificate of analysis issued by our fully
                                        equipped laboratory
                                </l1>
                                    <li className="list-group-item">
                                        We routinely test for a range of grain/malt quality and food
                                        safety parameters. See Appendix II for a list of parameters
                                        analyzed.
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="container p-5">
                <h1 className="fs-1 py-5 mb-4">Our Clients</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
                        <img src={nig} alt="nigeria breweries" style={clientImg} />
                        <p >
                            <h4>NIGERIAN BREWERIES PLC.</h4>
                            <p className="lead">
                                Locations served:
                                NB plc Lagos Brewery; NB plc Ibadan Brewery; Life
                                Breweries, Onitsha; Former Sona Breweries, Otta.
                            </p>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
                        <img src={nestle} alt="nestle breweries" style={clientImg} />
                        <p>
                            <h4>NESTLE NIGERIA PLC. </h4>
                            <p className="lead">
                                Locations served:
                                Agbara factory
                                </p>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
                        <img src={guiness} alt="guiness nigeria plc" style={clientImg} />
                        <p>
                            <h4>GUINNESS NIGERIA PLC.</h4>
                            <p className="lead">
                                Locations served:
                                Harp Brewery, Ogba, Lagos;
                                Guinness Brewery, Benin.
                            </p>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
                        <img src={pabbo} alt="pabbo breweries ltd" style={clientImg} />
                        <p>
                            <h4>PABOD BREWERIES LTD.</h4>
                            <p className="lead">
                                Locations Served:
                                Pabod Breweries, Port Harcourt
                             </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
