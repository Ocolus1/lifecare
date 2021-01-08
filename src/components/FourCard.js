import React from 'react';
import { CardGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import styles from "../css/four.module.css"


library.add(fab, far, fas)

export default function FourCard() {
    const paragh = {
        fontSize: "160%",
        fontWeight: 500
    }
    const font = {
        color: "#FF006E"
    }
    return (
        <div>
            <CardGroup className={styles.group}
            >
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
                <Card className={styles.card}>
                    <p className={styles.icon}>
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
                            safety parameters.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
