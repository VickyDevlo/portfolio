import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "../hooks/useToast";
import { INITIAL_FORM_FIELDS } from "../data/content";

export const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_FIELDS);
  const [status, setStatus] = useState("");
  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    const mobileNumber = formData.mobile.trim();
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name.trim(),
          mobile: mobileNumber,
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      toast.success("Message sent successfully!");
      setFormData(INITIAL_FORM_FIELDS);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputClasses =
    "bg-transparent border border-mistdim/40 focus:border-ember rounded-lg px-4 py-3 text-paper placeholder-mist/50 font-body text-[15px] outline-none transition-colors duration-200 w-full";

  const labelClasses = "font-mono text-xs uppercase tracking-widest text-mist";

  return (
    <div className="min-w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${inputClasses} capitalize`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="mobile" className={labelClasses}>
              Mobile number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              autoComplete="tel"
              placeholder="9876543210"
              value={formData.mobile}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              maxLength={10}
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              required
              className={inputClasses}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Share your thoughts..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputClasses} resize-y`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="my-2 bg-ember hover:bg-ember/90 disabled:opacity-60 disabled:cursor-not-allowed text-ink font-display font-semibold text-xs uppercase tracking-widest rounded-full px-8 py-3.5 transition-colors duration-200"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>
      <p className="font-body text-xs text-center text-mist">
        We’ll get back to you within 2 hours.
      </p>
    </div>
  );
};
