import React from "react";
import Paragraph from "../../components/paragraph/Paragraph";
import "./AboutScreen.scss";

const AboutScreen = () => {
    return (
        <div className="dkAboutScreen">
            <div className="container-fluid no-gutters">
                <div className="row">
                    <div className="col-6 text-div">
                        <div className="row py-3">
                            <div className="col-12">
                                <h1 className="display-5 text-white text-center text-lowercase">
                                    island teki
                                </h1>
                                <Paragraph size={18}>
                                    Hello, my name is Landon McKell. I am the
                                    creator of this simple blog and I made it
                                    with one thing in mind and that was
                                    to blog my journey in becoming a web
                                    developer and sharing my experiences.
                                </Paragraph>
                                <Paragraph size={18}>
                                    The Feynman Technique suggest one of the
                                    methods for helping you increase your
                                    understanding in your study field is to
                                    teach someone that subject or topic.
                                </Paragraph>
                                <Paragraph size={18}>
                                    One of my first goals in starting a blog was
                                    to actually make my own. I bootstrapped this
                                    site using the MERN stack and with Bootstrap
                                    5 as the UI library.
                                </Paragraph>
                                <Paragraph size={18}>
                                    Go ahead and browse this site. Give me
                                    feedback, things I can improve on, post
                                    suggestions, or anything else you have in mind.
                                    I have one rule and that's just to be nice. No one's perfect.
                                    Have a great day!
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 img-bg">
                        <div className="overlay" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen;
