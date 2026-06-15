import { useState } from "react";
import { submitCollaboration } from "../../services/formServices";

export default function CollaborationForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitCollaboration(e.target);
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
      <div className="rounded-2xl p-6" style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}>
        <p className="font-display font-bold text-[#3D4852] text-xl mb-2">Thank you.</p>
        <p className="text-sm text-[#4B5563] font-medium">Your request has been received. I'll review and respond within 24–48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="collab-name" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Your Name</label>
        <input id="collab-name" name="name" placeholder="Your Name" className="input" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="collab-email" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Your Email</label>
        <input id="collab-email" name="email" placeholder="Your Email" type="email" className="input" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="collab-brand" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Brand / Company</label>
        <input id="collab-brand" name="brand" placeholder="Brand / Company (optional)" className="input" />
      </div>
      <div className="space-y-1">
        <label htmlFor="collab-instagram" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Instagram Handle</label>
        <input id="collab-instagram" name="instagram" placeholder="Instagram Handle" className="input" />
      </div>
      <div className="space-y-1">
        <label htmlFor="collab-message" className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Tell me about the collaboration</label>
        <textarea
          id="collab-message"
          name="message"
          placeholder="Tell me about the collaboration"
          rows={4}
          className="input resize-none"
          required
        />
      </div>
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
