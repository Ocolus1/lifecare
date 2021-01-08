import React from 'react'
import OfficeContact from '../components/OfficeContact'
import Team from '../components/Team'
import Timeline from '../components/Timeline'

export default function About() {
    return (
        <div className="">
            <div className="p-5 my-3">
                <div className="text-center p-3">
                    <h1 className="fs-1">About</h1>
                    <p>Factory, Industrial theme &rarr; About Us</p>
                </div>
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Timeline />
            </div>
            <div>
                <OfficeContact />
            </div>
        </div>
    )
}
