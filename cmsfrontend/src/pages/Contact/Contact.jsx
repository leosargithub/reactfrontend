import React, { useState } from "react";
import "./Contact.css";

const EMAIL = "you@example.com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please write a message.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>

        <h1>Get in touch</h1>

        <p className="lead">
          Have a project in mind or just want to say hi? Send me a message and
          I'll get back to you as soon as I can.
        </p>

        <div className="layout">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={errors.name ? "invalid" : ""}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={errors.email ? "invalid" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className={errors.message ? "invalid" : ""}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </label>

            <button type="submit" className="btn">
              Send message
            </button>

            {sent && (
              <p className="success">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>

          <aside className="info">
            <h3>Other ways to reach me</h3>

            <p>
              <span>Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>

            <p>
              <span>Location</span>
              Kathmandu, Nepal
            </p>

            <div className="socials">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
