import Link from "next/link";

const footerLinks = {
  organisation: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Scientific Advisory", href: "/about#advisory" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Knowledge Hub", href: "/knowledge" },
    { name: "Research Library", href: "/research" },
    { name: "Tools We Trust", href: "/tools" },
    { name: "Genetics & Neurodivergence", href: "/research#genetics" },
  ],
  community: [
    { name: "Join the Community", href: "https://likeminds-community-8530fe.circle.so" },
    { name: "Newsletter", href: "#newsletter" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-lg font-bold text-white">
              Like Minds<span className="text-teal-400"> Community</span>
            </span>
            <p className="mt-4 text-sm leading-6 text-navy-300">
              The world&apos;s most credible, compassionate, and empowering
              community for neurodivergent minds.
            </p>
          </div>

          {/* Organisation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Organisation</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.organisation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-white">Community</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6 text-center">
          <p className="text-xs text-navy-400">
            &copy; {new Date().getFullYear()} Like Minds Community. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
