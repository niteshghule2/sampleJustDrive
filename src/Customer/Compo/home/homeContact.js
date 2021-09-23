import { Link } from "react-router-dom"
function HomeContact() {
    return (
        <div>
            {/* <!-- ***** Call to Action Start ***** --> */}
            {/*style="background-image: url(assets/images/banner-image-1-1920x500.jpg)"*/}
            <section className="section section-bg" id="call-to-action" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <h2>Send us a <em>message</em></h2>
                                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                                <div className="main-button">
                                    <Link to="/contact">Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Call to Action End ***** --> */}
        </div>
    );
}
export default HomeContact;