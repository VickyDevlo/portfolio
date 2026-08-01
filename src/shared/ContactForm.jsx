import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "../hooks/useToast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        toast.success("Message sent successfully!");
        setFormData({ name: "", mobile: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        toast.error("Something went wrong. Please try again.");
      });
  };

  const inputClasses =
    "bg-transparent border border-mistdim/40 focus:border-ember rounded-lg px-4 py-3 text-paper placeholder-mist/50 font-body text-[15px] outline-none transition-colors duration-200 w-full";

  const labelClasses = "font-mono text-xs uppercase tracking-widest text-mist";

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 flex flex-col gap-2">
            <label className={labelClasses}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${inputClasses} capitalize`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className={labelClasses}>Mobile number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="98 7654 3210"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9+ ]{10,15}"
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Email id</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Message</label>
          <textarea
            name="message"
            placeholder="Write Something ..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputClasses} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className=" mt-2 bg-ember hover:bg-ember/90 disabled:opacity-60 disabled:cursor-not-allowed text-ink font-display font-semibold text-xs uppercase tracking-widest rounded-full px-8 py-3.5 transition-colors duration-200"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p className="font-body text-xs text-center text-mist">
          Your message matters—we'll get back to you within 2 hours.
        </p>
      </form>
    </div>
  );
};
