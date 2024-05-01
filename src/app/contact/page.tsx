import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";

export default function Contact() {
    return (
        <div>
            <section className="Sub-header" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/banner.png")'}}>
                <h1>Contact Us</h1>
            </section>
            <section className="contact-us">
                <div className="row">
                    <div className="content-col">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>Main Road, Samanabad</h5>
                                <p>Faisalabad, Punjab, Pakistan</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>+92 321 866 1857</h5>
                                <p>Monday To Saturday, 9AM To 6PM</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>
                                <h5>m.n.shahzad@email.com</h5>
                                <p>Email Us Yor Query</p>
                            </span>
                        </div>
                    </div>
                    <div className="content-col">
                        <form>
                            <input type="text" placeholder="Enter Name" required name="name" />
                            <input type="email" placeholder="Enter Email" required name="email" />
                            <input type="text" placeholder="Enter Subject" required name="subject" />
                            {/* <textarea rows="8" placeholder="Message" required name="message"></textarea> */}
                            <button type="submit" className="hero_btn btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
