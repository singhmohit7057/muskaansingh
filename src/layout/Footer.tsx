import { Link } from "react-router-dom";
import { AtSign, Globe, ShoppingBag, ShoppingCart, Heart, Zap, Tag } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Brand",      href: "/brand" },
  { label: "Collection", href: "/collection" },
  { label: "Content",    href: "/content" },
  { label: "Press",      href: "/press" },
  { label: "Contact",    href: "/contact" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use",   href: "/terms" },
  { label: "Cookies",        href: "/cookies" },
];
const igAccounts = [
  { handle: "muskaansingh97",    label: "Personal" },
  { handle: "labelmuskaansingh", label: "Label" },
  { handle: "_ibtidaofficial_",  label: "Ibtida" },
];
const platforms = [
  { icon: Globe,        label: "Official Site", link: "https://labelmuskaansingh.in" },
  { icon: ShoppingBag,  label: "Amazon",        link: "https://www.amazon.in/s?k=label+muskaan+singh" },
  { icon: ShoppingCart, label: "Flipkart",       link: "https://www.flipkart.com/search?q=label+muskaan+singh" },
  { icon: Heart,        label: "Myntra",         link: "https://www.myntra.com/search/label+muskaan+singh" },
  { icon: Zap,          label: "AJIO",   link: "https://www.ajio.com/search/?text=label+muskaan+singh" },
  { icon: Tag,          label: "Meesho", link: "https://www.meesho.com/labelmuskaansingh" },
];

export default function Footer() {
  return (
    <footer className="bg-[#E0E5EC] pt-10 pb-6 px-6 md:pt-20 md:pb-10 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-14">

          {/* BRAND */}
          <div>
            <h3 className="font-display font-bold text-[#3D4852] text-lg mb-2">Muskaan Singh</h3>
            <p className="text-[#4B5563] text-xs leading-relaxed mb-3 hidden md:block">
              Founder of Label Muskaan Singh. Contemporary ethnic wear rooted in craftsmanship and modern identity.
            </p>
            <a
              href="https://labelmuskaansingh.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#4C40C0] hover:text-[#6C63FF] transition-colors"
            >
              Visit Brand Site →
            </a>
            <div className="mt-4">
              <p className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest mb-2">Follow</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-y-2">
                {igAccounts.map((acc) => (
                  <a
                    key={acc.handle}
                    href={`https://instagram.com/${acc.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#4B5563] hover:text-[#4C40C0] transition-colors py-2"
                  >
                    <AtSign size={10} />
                    <span>{acc.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest mb-3">Navigation</p>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-4">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-[#4B5563] hover:text-[#4C40C0] transition-colors font-medium block py-1.5">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest mb-3">Legal</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-x-0 md:space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-[#4B5563] hover:text-[#4C40C0] transition-colors font-medium block py-1.5">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PLATFORMS */}
          <div>
            <p className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest mb-3">Available On</p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-4">
              {platforms.map((p) => (
                <a
                  key={p.label}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#4C40C0] transition-colors group py-2"
                >
                  <p.icon size={13} className="text-[#4B5563] group-hover:text-[#4C40C0] transition-colors" />
                  <span className="font-medium">{p.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div
          className="rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
        >
          <p className="text-xs text-[#4B5563]">© 2026 Muskaan Singh. All rights reserved.</p>
          <p className="text-xs font-semibold text-[#4B5563]">Made with ❤️ by <a href="https://www.tmmt.in" target="_blank" rel="noopener noreferrer" className="text-[#4C40C0] hover:text-[#6C63FF] transition-colors">TMMT</a></p>
        </div>

      </div>
    </footer>
  );
}
