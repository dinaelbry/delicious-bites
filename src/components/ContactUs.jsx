import React from "react";

export default function ContactUs() {
  return (
    <section className="contact container my-4 py-3">
      <div className="row gx-5 align-items-start">
        {/* left info */}
        <div className="col-12 col-md-6">
          <div className="get">
            <div className="heading">
              <h3>
                <span>Get in</span> Touch
              </h3>
              <p className="txt-gray ">
                We're here to help with any questions about our products orders
                or special requests. Fill out the form or use the contact
                information below.
              </p>
            </div>

            <div className="content my-4">
              <div className="detail d-flex align-items-center justify-content-start">
                <div className="icon me-3">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info my-3">
                  <h5>Our Location</h5>
                  <span>123 Flavor Street</span>
                  <span className="d-block">Cairo Egypt</span>
                </div>
              </div>

              <div className="detail d-flex align-items-center justify-content-start">
                <div className="icon me-3">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info my-3">
                  <h5>Email Us</h5>
                  <span>dinaelbry708@gmail.com</span>
                </div>
              </div>

              <div className="detail d-flex align-items-center justify-content-start">
                <div className="icon me-3">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info my-3">
                  <h5>Call Us</h5>
                  <span>01556663526</span>
                </div>
              </div>

              <div className="works-hours mt-4 pt-3 w-100">
                <h5>Business Hours</h5>
                <div className="txt-gray fw-medium pt-3">
                  <div className="day d-flex justify-content-between">
                    <p>Monday-Friday: </p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="day d-flex justify-content-between">
                    <p>Saturday: </p>
                    <p>10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="day d-flex justify-content-between">
                    <p>Sunday: </p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right form */}
        <div className="form col-12 col-md-6">
            <h4>Send Us a Message</h4>

            <form>
              <div className="my-3">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                />
              </div>

              <div className="my-3">
                <label htmlFor="mail">Email Address</label>
                <input
                  id="mail"
                  className="form-control"
                  type="email"
                  name="mail"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="my-3">
                <label htmlFor="sub">Subject</label>
                <input
                  id="sub"
                  className="form-control"
                  type="text"
                  name="sub"
                  placeholder="How can we help you"
                />
              </div>

              <div className="my-3">
                <label htmlFor="msg">Message</label>
                <textarea
                  id="msg"
                className="form-control"
                placeholder="Your message here..."
                  name="msg"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="my-3 btn-custom w-100">
                Send Message
              </button>
            </form>
          </div>
      </div>
    </section>
  );
}
