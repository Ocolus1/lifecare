import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export default function Statement() {
    return (
        <div>
            <div className="p-5 mb-3">
                <div className="text-center p-3">
                    <h1 className="fs-1">Statements</h1>
                    <p>Factory, Industrial theme &rarr; Statements</p>
                </div>
            </div>
            <div>
                <Container>
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <h2 className="fs-1 py-2">Our vision</h2>
                                    <div className="shadow p-3 py-5 mb-5 bg-white rounded">
                                        To lead the way in enhancing the value chain in the
                                        Nigerian agricultural sector.
                                        To lead the pioneers of the uncharted Nigerian agricultural
                                        value chain.
                                        To go where no one has gone before in the Nigerian
                                        agricultural value chain.
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h2 className="fs-1 py-2">The mission</h2>
                                    <div className="shadow p-3 mb-5 bg-white rounded">
                                        The company’s mission is to create value for commercial
                                        and industrial end users within the Nigerian &amp; West African
                                        agro-commodity supply chain by developing, producing
                                        and selling/supplying innovative high-quality value-added
                                        food and feed ingredient alternatives from local
                                        commodities (and so harnessing the strategic, economic
                                        and ethical advantages that are inherent in near proximity
                                        procurement) using best practices and appropriate
                                        technology in all processes.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="text-center">
                                <h2 className="fs-1 py-5">Our Strategy</h2>
                                <div className="p-3 ">
                                    The company’s strategy to achieve its medium to long
                                    term economic objectives is to increase share of existing
                                    markets by maintaining a high quality, low cost operation,
                                    greater market penetration by promoting existing products
                                    to new users, diversification into new local commodity and
                                    food/feed ingredients markets in general by promoting
                                    new processing technologies and food applications
                                    appropriate to available commodities.
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="p-5">
                                <h2 className="fs-1 py-5">Our Goals</h2>
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            Provide best-in-class contract services to our clients,
                                            meeting and exceeding all customer requirements
                                            and expectations.
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Maximize sustainable
                                            profitability and ensure
                                            adequate returns to our
                                            shareholders.
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Maintain competitive
                                            edge by investing in
                                            state-of-the-art
                                            technology thereby enhancing operational efficiency.
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Develop and market new value-added food and feed
                                            ingredients based on local commodities.
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Develop new markets for tender milling services
                                            (with other commodities).
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Invest in human capital by putting in place an
                                            employment policy that will attract, develop and
                                            retain highly qualified and multi-skilled professionals.
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Drive and implement community specific
                                            development projects and programs for the local
                                            community.
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Implement stated HSE policy via an HSE
                                            Management System (Appendix I)
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
