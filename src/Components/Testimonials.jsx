import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Happy Customers</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            Chaymae travels has such a user-friendly website. Easy to navigate,
            search and fiddle with dates instead of having to call up. Once
            decided, the booking process was swift and easy, thank you.
          </p>

          <div className={Classes.info}>
            <img src={avatar} alt="image" />
            <div>
              <h3>Amina Barakat</h3>
              <span>CEO • Kaynaastuces</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <p>
            Great communication. This was a rushed booking and she was very
            helpful/prompt with calls/replies to ensure we could have preferred
            dates.
            <br/>
            <br/>
          </p>

          <div className={Classes.info}>
            <img src={avatar2} alt="image" />
            <div>
              <h3>Melissa Guadalo</h3>
              <span>Dataanalytics • cisco.com</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            I must say the service we received from this company was amazing and
            would recommend them to anyone to trust and use them the rewards you
            get with your holidays are just fantastic.
          </p>

          <div className={Classes.info}>
            <img src={avatar3} alt="image" />
            <div>
              <h3>Mark Anilo</h3>
              <span>CEO • Mostdev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
