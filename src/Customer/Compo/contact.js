// import { useHistory } from "react-router-dom"
import mbg from "../assets/images/banner-image-1-1920x500.jpg"
import icon1 from "../assets/images/line-dec.png"


function Contact() {
    // const counter = useSelector((state) => state.counter);
    // const history = useHistory();
    // const home = () => {
    //     history.push('/')
    // }
    return (
        <div>
            {/* style="background-image: url(assets/images/banner-image-1-1920x500.jpg)" */}
            <section className="section section-bg" id="call-to-action" style={{ backgroundImage: `url(${mbg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <br />
                                <br />
                                <h2>Feel free to <em>Contact Us</em></h2>
                                {/* <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ***** Features Item Start ***** --> */}
            <section className="section" id="features">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>contact <em> info</em></h2>
                                <img src={icon1} alt="waves" />

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>

                            <h5><a href="tel:+91 2025503100">+91 2025503100</a></h5>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>

                            <h5><a href="mailto:info@cdac.in">info@cdac.in</a></h5>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>

                            <h5>C-DAC Innovation Park,
                                Panchavati, Pashan,
                                Pune - 411 008, Maharashtra (India)</h5>

                            <br />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Features Item End ***** --> */}

            {/* <!-- ***** Contact Us Area Starts ***** --> */}
            {/* style="margin-top: 0" */}
            <section className="section" id="contact-us" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div id="map">
                                {/* style="border:0" */}
                                <iframe src="https://maps.google.com/maps?q=18.53496, 73.81102&z=15&output=embed" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            {/* style="background-image: url(assets/images/contact-1-720x480.jpg)" */}
                            <div className="contact-form section-bg" >
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Your Name*" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="text" id="subject" placeholder="Subject" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="main-button">Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Contact Us Area Ends ***** --> */}

        </div >
    );
}

export default Contact;
