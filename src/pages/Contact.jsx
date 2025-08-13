import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qf2lnfk",   // Replace with your Service ID
        "template_s36vpqs",  // Replace with your Template ID
        form.current,
        "P48ZHQ_LYng6HdTXk"    // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#00030C] min-h-screen text-white p-10">
      {/* Navbar */}
      <nav className="flex justify-center z-50 bg-transparent p-5">
        <ul className="flex justify-center gap-6 text-[#F9F9F9] text-xl font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto mt-20 bg-[#111] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-5 text-center">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded bg-[#222] text-white"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded bg-[#222] text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-[#222] text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#FF5B02] text-white p-3 rounded font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
