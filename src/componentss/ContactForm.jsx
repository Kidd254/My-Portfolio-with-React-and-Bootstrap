import styles from '../styles/ContactForm.module.css';
/* eslint-disable jsx-a11y/label-has-associated-control */
const ContactForm = () => (
  <div className={`container-fluid d-flex flex-column justify-content-center align-items-center pt-5 background ${styles.background}`}>

    <div className="col-md-3 offset-md-5 container-fluid text-white">
      <h1 className="pb-3">Contact Me</h1>
      <p>
        If you have an application you are interested in developing,
        a feature that you need built or a project that needs coding.
        I’d love to help with it
      </p>
    </div>

    <form action="https://formspree.io/f/xnqkpzvv" method="post">
      <div className="row mt-3 mb-3">
        <label htmlFor="nameInput" className="col-md-3 col-form-label text-white">Name</label>
        <div className="col-md-8">
          <input id="nameInput" type="text" className="form-control" placeholder="Enter Your name" required />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="emailInput" className="col-md-3 col-form-label text-white">Email</label>
        <div className="col-md-8">
          <input type="email" id="emailInput" className="form-control" placeholder="Enter Your Email" required />
        </div>
      </div>
      <div className="row mb-3">

        <label htmlFor="textInput" className="col-md-3 col-form-label text-white">Message</label>
        <div className="col-md-8">
          <textarea className="form-control " placeholder="Write your message..." />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 offset-md-6">
          <button type="submit" className="btn btn-success">Get in Touch</button>
        </div>

      </div>

    </form>
  </div>
);

export default ContactForm;
