"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Knowledge Hub", href: "/knowledge" },
  { name: "Tools We Trust", href: "/tools" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-navy-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-navy-900">
            Like Minds<span className="text-teal-600"> Community</span>
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://likeminds-community-8530fe.circle.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
          >
            Community
          </a>
          <a
            href="https://likeminds-community-8530fe.circle.so"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
          >
            Find Your People
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-600 hover:bg-navy-50 hover:text-navy-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-navy-100 bg-white">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-navy-600 hover:text-navy-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://likeminds-community-8530fe.circle.so"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-2 text-left text-base font-medium text-navy-600 hover:text-navy-900 transition-colors"
            >
              Community
            </a>
            <div className="pt-3">
              <a
                href="https://likeminds-community-8530fe.circle.so"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-md bg-teal-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
              >
                Find Your People
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
