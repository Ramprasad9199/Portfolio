import { useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setErrorMessage("Please fill in all fields");
    return;
  }

  setStatus("sending");
  setErrorMessage("");

  try {
    await emailjs.send(
      "service_ii60oxi",     // <-- replace
      "template_2xp447j",    // <-- replace
      formData,
      "g0iS1ZV0uzZlN8LXC"      // <-- replace
    );
     await emailjs.send(
      "service_ii60oxi",
      "template_34xr1fd", // second template
      formData,
      "g0iS1ZV0uzZlN8LXC"
    );

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      onClose();
      setStatus("idle");
    }, 2000);

  } catch (error) {
    setStatus("error");
    setErrorMessage("Failed to send message. Try again.");
  }
};

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-form-overlay" onClick={handleOverlayClick}>
      <div className="contact-form-modal">
        <button className="contact-form__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="contact-form__header">
          <h3 className="contact-form__title">Let's Connect</h3>
          <p className="contact-form__subtitle">Send me a message and I'll get back to you soon!</p>
        </div>

        {status === "success" ? (
          <div className="contact-form__success">
            <div className="contact-form__success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h4>Message Sent!</h4>
            <p>Thank you for reaching out. I'll respond as soon as possible.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <label htmlFor="name" className="contact-form__label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="name" className="contact-form__label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject" className="contact-form__label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Project Inquiry"
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="message" className="contact-form__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="contact-form__textarea"
                rows="5"
                required
              ></textarea>
            </div>

            {errorMessage && (
              <div className="contact-form__error">{errorMessage}</div>
            )}

            <button
              type="submit"
              className="contact-form__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className="contact-form__spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
