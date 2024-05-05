import React from "react";
import Link from "../../../node_modules/next/link";
export default function About() {
  return (
    <div> 
        <section>
        <h1>About Us</h1>
    </section>
    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world&aposs largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href="#" className="hero_btn btn">EXPLORE NOW</Link>
            </div>
            <div className="about-col">
                <img src="img/about.png" alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
};
