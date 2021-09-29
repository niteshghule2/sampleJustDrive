// import { useHistory } from "react-router-dom"
import mbg from "../assets/images/banner-image-1-1920x500.jpg"
import { Link } from 'react-router-dom';

function About() {
    // const counter = useSelector((state) => state.counter);
    // const history = useHistory();
    // const home = () => {
    //     history.push('/')
    sessionStorage.setItem("done", 0)
    // }
    return (
        <div>

            <section className="section section-bg" id="call-to-action" style={{ backgroundImage: `url(${mbg})` }}>
                {/* <img src={mbg} /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <br />
                                <br />
                                <h2>Learn more <em>About Us</em></h2>
                                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ***** Our classNamees Start ***** --> */}
            <section className="section" id="our-classNamees">
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="row" id="tabs">
                        <div className="col-lg-4">
                            <ul>
                                <li><a href='#tabs-1'><i className="fa fa-soccer-ball-o"></i> Our Goals</a></li>
                                <li><a href='#tabs-2'><i className="fa fa-briefcase"></i> Our Work</a></li>
                                <li><a href='#tabs-3'><i className="fa fa-heart"></i> Our Passion</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <section className='tabs-content'>
                                <article id='tabs-1'>
                                    <img src="assets/images/about-image-1-940x460.jpg" alt="" />
                                    <h4>Our Goals</h4>

                                    <p>JustDrive provides the flexibility of having a car anytime you want, as well as the assurance of a sanitized and virus free vehicle for your own self drive. The car sanitization process encompasses all the preventive hygiene best practices directed by the World Health Organization (WHO) and is diligently conducted for each vehicle delivered to the customer.</p>

                                    <p>Whether you’re planning a road trip outside the city or looking for a convenient way to cruise around when you’re out of town, JustDrive is here to ease your travel woes. You can pick one of JustDrive’s convenient car rental options to drive down to the nearby beach or to manoeuvre through traffic as you head from one important business meeting to the next. With a self-drive car rental from JustDrive, you have the freedom to move around and explore places at your own pace.</p>

                                    <p>JustDrive has an amazing fleet of rental cars ranging from compact hatchbacks to roomy sedans and powerful SUVs. You can choose to hire a Hyundai Grand i10, Hyundai Creta, Honda City, Maruti Suzuki Brezza, Ford EcoSport, Mahindra Scorpio, Toyota Innova Crysta, Mahindra XUV and many other car models that suit your requirement.</p>

                                    <p>One of our top priorities is to adjust each package we offer to our customer’s exact needs. We offer a variety of options that can enhance your experience, always according to your necessities, and help you get the best out of your holidays or your business trip.</p>
                                </article>
                                <article id='tabs-2'>
                                    <img src="assets/images/about-image-2-940x460.jpg" alt="" />
                                    <h4>Our Work</h4>
                                    <p>We offer 24/7 services. We specialise in the best customer service, Well maintained cars and Clean Cars. All our vehicles are regularly checked and routine maintenance is done on all cars. We provide all user friendly and safety facilities like Air Conditioners, Power Windows, Music System, Power Steering, Seat Covers, ABS, Air Bags.</p>

                                    <p>We have the keys for you to unlock happiness as you drive away with your loved ones. Choose from more than 15+ car models and rent by the hour. Find us in your neighborhood with our fleet spread over several cities . So whenever you find the roads calling, JustDrive will always be near with 50+ pick-up locations. Ready to drive yourself to your next adventure with JustDrive?</p>
                                </article>
                                <article id='tabs-3'>
                                    <img src="assets/images/about-image-3-940x460.jpg" alt="" />
                                    <h4>Our Passion</h4>
                                    <p>Be it business travel, leisure travel, intercity getaways or just city zipping - be spoilt for choices with our exhaustive range of well-maintained Hatchbacks, Sedans, MUVs, SUVs, Hybrids and Luxury Cars on rent. We offer over 25 vehicle makes to choose from across various cities, ensuring you get the best rental cars at lowest prices throughout India.
                                    </p>

                                    <p>Our self drive car rental come with unlimited kilometres so you can concentrate on counting memories, not kilometres.</p>

                                    <p>Rent a car  from the most accessible, affordable and convenient car rental brand in just a few steps.
                                        JustDrive car rentals lets you rent your vehicle from people around you.Most of the cars in our fleet are equipped with ABS & Airbags.
                                        All you have to do is rent, ride and repeat.</p>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Our classNamees End ***** --> */}


        </div >
    );
}

export default About;
