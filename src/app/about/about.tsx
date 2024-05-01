import React from "react";
import Link from "../../../node_modules/next/link";
import "./globals.css"; // assuming you have CSS modules

export default function About() {
  return (
    <div> 
    <section className="Sub-header" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/banner.png")'}}>
    <h1>About Us</h1>
</section>
        <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga
                    vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur,
                    nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat.</p>
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
