import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* <!-- Main Footer --> */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Brand --> */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                T<span className="text-red-600">i</span>tan
                <span className="text-red-600">.</span>
              </h2>

              <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
                Timeless watches designed to match your style. Discover quality, precision, and elegance in every detail.
              </p>
            </div>

            {/* <!-- Shop --> */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Shop
              </h3>

              <ul className="mt-4 space-y-3 text-sm grid grid-cols-2 gap-3 lg:grid-cols-1">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Men&apos;s Watches
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Women&apos;s Watches
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Smart Watches
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Support --> */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Support
              </h3>

              <ul className="mt-4 space-y-3 text-sm grid grid-cols-2 gap-3 lg:grid-cols-1">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Shipping & Delivery
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Returns & Refunds
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                LOCATION
              </h3>
              <div className="transition hover:text-white">
                <Link className="flex gap-2 mt-4 space-y-3 text-sm" href={"https://www.google.com/maps/place/%E0%A4%B8%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%B0%E0%A4%BE/@19.2661097,76.7706105,3a,75y,42.79h,104.11t/data=!3m7!1e1!3m5!1smk4ZSXbjNlTRIgaFWFqINw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-14.11030547125938%26panoid%3Dmk4ZSXbjNlTRIgaFWFqINw%26yaw%3D42.79036827933792!7i16384!8i8192!4m6!3m5!1s0x3bd019d0e44e936f:0xad89c48ef2a836c7!8m2!3d19.26616!4d76.7706493!16s%2Fg%2F11vrpws953?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"}>
                  <MapPin />
                  Titan Watch Centre, near mulla masjid, parbhani
                </Link>
              </div>
            </div>

            {/* <!-- Newsletter --> */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Stay Updated
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Subscribe to receive updates about new collections and offers.
              </p>

              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-l-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-zinc-500"
                />

                <button
                  type="submit"
                  className="rounded-r-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* <!-- Bottom --> */}
          <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500 m-auto">
              © 2026 TITAN. All rights reserved.
            </p>

            <div className="flex gap-5 text-sm justify-around">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="transition hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
