import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const shopLinks = ["Men's Watches", "Women's Watches", "Smart Watches", "New Arrivals"];
const supportLinks = ["Contact Us", "Shipping & Delivery", "Returns & Refunds", "FAQs"];

const linkClass = "transition-colors hover:text-copper";
const headingClass = "text-sm font-semibold uppercase tracking-wider text-parchment";

export default function Footer() {
  return (
    <footer className="border-t border-copper/40 bg-prussian text-bone">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-parchment">
              T<span className="text-copper">i</span>tan
              <span className="text-copper">.</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-parchment/60">
              Timeless watches designed to match your style. Discover quality,
              precision, and elegance in every detail.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className={headingClass}>Shop</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
              {shopLinks.map((label) => (
                <li key={label}>
                  <a href="#" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={headingClass}>Support</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
              {supportLinks.map((label) => (
                <li key={label}>
                  <a href="#" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className={headingClass}>Location</h3>
            <Link
              className={`mt-4 flex gap-2 text-sm ${linkClass}`}
              href="https://www.google.com/maps/place/..."
            >
              <MapPin className="h-5 w-5 shrink-0 text-copper" />
              Titan Watch Centre, near mulla masjid, parbhani
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={headingClass}>Stay Updated</h3>

            <p className="mt-4 text-sm leading-6 text-parchment/60">
              Subscribe to receive updates about new collections and offers.
            </p>

            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-lg border border-parchment/20 bg-prussian px-4 py-2.5 text-sm text-parchment outline-none placeholder:text-parchment/40 focus:border-copper"
              />

              <button
                type="submit"
                className="rounded-r-lg bg-copper px-4 py-2.5 text-sm font-medium text-prussian transition-colors hover:bg-copper/85"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-parchment/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-auto text-sm text-parchment/50">
            © 2026 TITAN. All rights reserved.
          </p>

          <div className="flex justify-around gap-5 text-sm">
            <a href="#" className={linkClass}>Privacy Policy</a>
            <a href="#" className={linkClass}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}