import React from 'react'
import styles from "../css/time.module.css"

export default function Timeline() {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4>Timeline</h4>
                        <ul className={styles.timeline}>
                            <li className="shadow p-3 mb-5 bg-white rounded">
                                <p>Founding Date</p>
                                <p>February 1986 </p>
                                <p>
                                    The company was founded in 1986 by Mr. Francis O Ogunbajo,
                                    a pharmacist by profession and Mr. Kunle Osinaike, an accountant.
                                </p>
                            </li>
                            <li className="shadow p-3 mb-5 bg-white rounded">
                                <p>Commission of Factory</p>
                                <p>July 1991 </p>
                                <p>
                                    The company sorghum malting factory att Otta, Ogun State was
                                    built and Commissioned in 1991 with an initial annual capacity of 6000
                                    tons of malted sorghum.
                                </p>
                            </li>
                            <li className="shadow p-3 mb-5 bg-white rounded">
                                <p>Development of Website</p>
                                <p>January 2021</p>
                                <p>
                                    The company developed a website to create digital awareness
                                    of the services it provides
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
