// AboutUs.js

import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Zarka Bank</h1>
                <p>Your Trusted Partner in Financial Services</p>
            </header>

            <section>
                <h2>Our Story</h2>
                <p>
                    Zarka Bank has been a cornerstone of financial stability since 2020. 
                    We have grown from a local institution to a global presence, serving millions of customers with 
                    dedication and integrity.
                </p>
            </section>

            <section>
                <h2>Our Mission</h2>
                <p>
                    At Zarka Bank, our mission is to empower individuals, businesses, and communities 
                    by providing innovative and reliable financial solutions. We strive to be a catalyst for 
                    positive change and sustainable growth.
                </p>
            </section>

            <section>
                <h2>Core Values</h2>
                <ul>
                    <li>Integrity: We uphold the highest ethical standards in all our dealings.</li>
                    <li>Customer-Centric: Our customers are at the heart of everything we do.</li>
                    <li>Innovation: We embrace creativity and continually seek better ways to serve.</li>
                    <li>Community Engagement: We actively contribute to the well-being of the communities we serve.</li>
                </ul>
            </section>

            <section>
                <h2>Leadership Team</h2>
                <p>Meet the leaders guiding Zarka Bank towards a successful future:</p>
                <span>For more information please visit <i>www.Zarka.ma</i></span>
                {/* Add information about key team members here */}
                <ul>
                    <li>Abslam Humangosore : Presedent of Zarkawik Goverment ={'>'} CEO</li>
                    <li>Hmido tairat : ... ={'>'} CFO</li>
                    <li>Shlomo : Zarka Presedent ={'>'} Head of Operations</li>
                </ul>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or would like to learn more about Zarka Bank, 
                    please don't hesitate to <a href="contact.html">contact us</a>.
                </p>
            </section>

            <footer>
                <p>&copy; Zarka Bank {new Date().getFullYear()}. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutUs;
