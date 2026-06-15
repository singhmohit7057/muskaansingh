import { useState } from "react";
import { submitContact } from "../../services/formServices";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitContact(e.target);
    if (res.success) {
      setSent(true);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="py-8 rounded-2xl p-6" style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}>
        <p className="font-display font-bold text-[#3D4852] text-xl mb-2">Thank you.</p>
        <p className="text-sm text-[#4B5563] font-medium">Your message has been received. I'll be in touch within 24–48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="contact-name" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Your Name</label>
        <input id="contact-name" name="name" placeholder="Your Name" className="input" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-email" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Your Email</label>
        <input id="contact-email" name="email" type="email" placeholder="Your Email" className="input" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-subject" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Subject</label>
        <input id="contact-subject" name="subject" placeholder="Subject" className="input" />
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-message" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your Message"
          rows={5}
          className="input resize-none"
          required
        />
      </div>
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
