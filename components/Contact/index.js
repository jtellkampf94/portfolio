import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Modal from "../Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__heading">
        <h1>Contact</h1>
        <h2>Have a question or want to work together?</h2>
      </div>
      <form ref={form} className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-sender">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send Message</button>

        {isModalOpen && (
          <Modal open={isModalOpen} closeModal={() => setIsModalOpen(false)}>
            Your message has successfully been sent.
          </Modal>
        )}
      </form>
    </section>
  );
};

export default Contact;
