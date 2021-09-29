import { Link } from "react-router-dom"
function HomeAbout() {
    return (
        <div>
            {/*style="background-image: url(assets/images/about-fullscreen-1-1920x700.jpg)"*/}
            <section className="section section-bg" id="schedule" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading dark-bg">
                                <h2>Read <em>About Us</em></h2>
                                <div className="cta-content text-center">
                                    <p>If we're not there in your city yet, then please be patient, we may be there sooner than you think. :)
                                        Rent a car now at low rates from JustDrive. Renting a car has never been this easy and smooth. With JustDrive, you can own the experience, without having to own the ride. Planning an intercity travel trip or around the city travel and need a car ? Want to rent a car  by hours, days or weeks? Don’t want to wait for a cab or in queue at public transport? You are at the right place. JustDrive gives you the luxury of renting a car at affordable rates with no security deposit on your rented vehicle and much more. Rent a car  from the most accessible, affordable and convenient car rental brand in just a few steps.
                                        JustDrive car rentals lets you rent your vehicle from people around you.Most of the cars in our fleet are equipped with ABS & Airbags.
                                        All you have to do is rent, ride and repeat.</p>
                                    <div className="main-button">
                                        <Link to="/about">About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default HomeAbout;