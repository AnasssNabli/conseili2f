import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const backgroundImage = '/img/Business.jpg'; // Background image

  return (
    <div
      className="contact-section"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '80px 20px' }}>
        {/* Header Section */}
       
        {/* Content Section */}
        <div className="row">
          {/* Left Side: Custom Information Section */}
          <div className="col-md-6">
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem', letterSpacing: '1px' }}>Contact Us</h1>
            <p>
              I2F CONSEIL values the information you provide to contact you regarding your query. You can unsubscribe from our email at any time. For more
              information on how you can unsubscribe, as well as our privacy practices and commitment to protecting your privacy.
            </p>
            <p>
              For more information, a free quote, or questions about our expertise or pricing in Casablanca and throughout Morocco, feel free to contact us.
            </p>
          </div>

          {/* Right Side: Form Section */}
          <div className="col-md-6">
          <div className="contact-form bg-white p-4 rounded shadow-lg">
              {/* Phone Numbers Section in the Form Header */}
              <h3 className="mb-4 text-center " style={{ color: '#007bff' }}>APPELEZ-NOUS</h3>
              <div className="text-center text-dark mb-4">
                <p>+212 522 350 705</p>
                <p>+212 520 217 592</p>
                <p>+212 667 201 613</p>
              </div>

              {/* Contact Form */}
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark">Name </label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-dark">Subject </label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">Email </label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-dark">Message </label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="row mt-5">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.795877300062!2d-7.5598215843122565!3d33.59000298073838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3540fb5f31f%3A0x1d3b6dc6ff5989e7!2sAli%20Yaata%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1647365804937!5m2!1sfr!2sma"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
