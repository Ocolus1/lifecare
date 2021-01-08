import React from 'react'
import { Button, Container } from 'react-bootstrap'
import styles from "../css/home.module.css"
import FourCard from '../components/FourCard'
import Caurosel from '../components/Caurosel'
import { Link } from "react-router-dom"
import OfficeContact from "../components/OfficeContact"
import Slide from '../components/Slide'


export default function Home() {
    return (
        <div className="">
            <div>
                <div
                    className={styles.mainBackground}
                >
                    <div className={styles.innerDiv} >
                        <p>
                            Malting of sorghum and Grain handling and storage facilities.
                        </p>
                        <Link to="/about">
                            <Slide>
                                <Button className={styles.mainDivButton} >
                                    Learn More
                                </Button>
                            </Slide>
                        </Link>
                    </div>
                </div>
                <div>
                    <Container>
                        <FourCard />
                    </Container>
                </div>
                <div className="py-4">
                    <Caurosel />
                </div>
                <div className="py-5 my-5">
                    <div className={styles.bestDiv}>
                        <div className="row">
                            <div className="col-md-6 mb-1 text-center fs-2 text-bolder text-white align-items-center"
                            >
                                We have the best deals available!
                            </div>
                            <div className="col-md-6 mt-1 text-center">
                                <Link to="/services">
                                    <Slide>
                                        <Button className={styles.bestBtn}>
                                            See current Deals &rarr;
                                        </Button>
                                    </Slide>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-5 bg-white">
                    <OfficeContact />
                </div>
            </div>
        </div>
    )
}
