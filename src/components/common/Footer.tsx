import React from 'react'
import { NavLink } from 'react-router-dom'
import { MAIN } from '../../constants/constant'

const Footer = () => {
    return (
        <div style={{ paddingTop: "5%" }}>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a target='_blank' href='https://www.facebook.com/Thinkbiz-Technology-Pvt-Ltd-110331820547875/'>
                            <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_38,h_38,al_c,enc_auto/e316f544f9094143b9eac01f1f19e697.png" alt="Facebook" className='mx-1' />
                        </a>
                        <a target='_blank' href='https://in.linkedin.com/company/thinkbiz-technology-private-limited'>
                            <img src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_38,h_38,al_c,enc_auto/48a2a42b19814efaa824450f23e8a253.png" alt="LinkedIn" className='mx-1' />
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>ThinkBiz Technology
                                </h6>
                                <p>
                                    We are the client Value Creation company by following the rule of respect for the individual with the sole aim of integrity in the company and also investing the time in innovations as Stewardship.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <NavLink to={MAIN} className="text-reset">Jera</NavLink>
                                </p>
                                <p>
                                    <NavLink to={MAIN} className="text-reset">TMS</NavLink>
                                </p>
                                <p>
                                    <NavLink to={MAIN} className="text-reset">Smart Flow</NavLink>
                                </p>
                                <p>
                                    <NavLink to={MAIN} className="text-reset">CostPay</NavLink>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                <a href='https://www.thinkbiz.co.in/' target="_blank" className="text-reset">Home</a>
                                </p>
                                <p>
                                <a href='https://www.thinkbiz.co.in/about/' target="_blank" className="text-reset">About</a>
                                </p>
                                <p>
                                <a href='https://www.thinkbiz.co.in/services/' target="_blank" className="text-reset">Services</a>
                                </p>
                                <p>
                                <a href='https://www.thinkbiz.co.in/career/' target="_blank" className="text-reset">Career</a>
                                </p>
                                <p>
                                <a href='https://www.thinkbiz.co.in/contact/' target="_blank" className="text-reset">Contact</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                                        </span>
                                        <span className="elementor-icon-list-text">709,7th Floor,Pinnacle Business park, Opp. Royal Orchid Apartment, Corporate Road, Prahalad Nagar, Ahmedabad-380051</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-icon">
                                            <img aria-hidden="true" className="fas fa-envelope"></img>
                                        </span>
                                        <span className="elementor-icon-list-text">contact@thinkbiz.co.in</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-icon">
                                            <img aria-hidden="true" className="fas fa-mobile"></img>
                                        </span>
                                        <span className="elementor-icon-list-text">+91-79-4003-0925</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    <b>&copy; {new Date().getFullYear()}</b>
                    <a className="text-reset fw-bold text-decoration-none mx-1" target="_blank" href="https://www.thinkbiz.co.in/">ThinkBiz, Inc.</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer