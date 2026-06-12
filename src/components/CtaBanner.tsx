import { Link } from "react-router-dom";

type Props = {
  tag?: string;
  heading?: string;
  body?: string;
  buttonLabel?: string;
  buttonTo?: string;
};

export default function CtaBanner({
  tag = "Let's Collaborate",
  heading = "Let's Create Together",
  body = "Open to brand partnerships, content collaborations, and press features.",
  buttonLabel = "Get in Touch",
  buttonTo = "/contact",
}: Props) {
  return (
    <section className="px-6 md:px-12 py-16">
      <div
        className="max-w-7xl mx-auto rounded-[32px] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
      >
        <div>
          <p className="section-tag">{tag}</p>
          <h2
            className="font-display font-extrabold text-[#3D4852] tracking-tight mt-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            {heading}
          </h2>
          <p className="text-[#6B7280] mt-2 text-sm font-medium max-w-md">{body}</p>
        </div>
        <Link to={buttonTo} className="btn-primary shrink-0">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
