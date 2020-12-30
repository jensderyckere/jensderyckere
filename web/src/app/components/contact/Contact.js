import React from 'react';

import Git from '../../assets/git2.svg';
import LinkedIn from '../../assets/linkedin.svg';

const Contact = ({screenSize}) => {
    const ContactDesktop = () => {
        return (
            <section className="contact">
                <div className="contact__text">
                    <h1>And i do love to talk!</h1>
                    <p>You can always <a href="tel:0477273697">call me</a> or <a href="mailto:jensderyckere@icloud.com">mail me</a></p>
                    <div className="contact__text--buttons">
                        <a href="https://github.com/jensderyckere" rel="noreferrer" target="_blank">
                            <img src={Git} alt="git" />
                        </a>
                        <a href="https://www.linkedin.com/in/jens-deryckere-860b5015a/" rel="noreferrer" target="_blank">
                            <img src={LinkedIn} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </section>
        )
    }

    const ContactMobile = () => {
        return (
            <section className="contact-res">
                <div className="contact-res__text">
                    <h1>And i do love to talk!</h1>
                    <p>You can always <a href="tel:0477273697">call me</a> or <a href="mailto:jensderyckere@icloud.com">mail me</a></p>
                    <div className="contact-res__text--buttons">
                        <a href="https://github.com/jensderyckere" rel="noreferrer" target="_blank">
                            <img src={Git} alt="git" />
                        </a>
                        <a href="https://www.linkedin.com/in/jens-deryckere-860b5015a/" rel="noreferrer" target="_blank">
                            <img src={LinkedIn} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
        {        
            screenSize === 'standard' && (
                <ContactDesktop />
            )
        }
        {
            screenSize === 'small' && (
                <ContactMobile />
            )
        }
        </>
    )
};

export default Contact;