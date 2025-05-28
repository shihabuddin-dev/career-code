import React, { useState } from "react";
import Lottie from "lottie-react";
import contactLottie from "../../assets/lotti/signIn.json";
import Button from "../../components/ui/Button";
import { MdContactMail } from "react-icons/md";

const inputBase =
  "w-full border-2 border-base-content/20 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition duration-200 bg-base-100 text-base-content";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      window.alert("Message sent successfully!");
    }, 1200);
  };

  return (
    <div className="flex gap-6 md:gap-24 flex-col md:flex-row justify-center items-center max-w-5xl mx-auto min-h-[80vh]">
      <title>Contact || Career Code</title>
      <div>
        <Lottie
          animationData={contactLottie}
          className="w-full h-[200px] md:h-[300px]"
        />
      </div>
      <div className="flex-1 max-w-md p-6 bg-base-100 rounded shadow border-2 border-secondary">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex justify-center items-center gap-2 md:gap-3 text-base-content">
          <MdContactMail className="text-primary" />
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-base-content">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={inputBase}
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <label className="block mb-2 text-sm font-medium text-base-content">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className={inputBase}
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          <label className="block mb-2 text-sm font-medium text-base-content">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className={inputBase}
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
          <label className="block mb-2 text-sm font-medium text-base-content">
            Message
          </label>
          <textarea
            name="message"
            className={inputBase}
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows={4}
            required
          />
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
