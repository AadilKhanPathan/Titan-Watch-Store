"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {  AlarmClock, Clock, UserRoundArrowLeft, Watch } from "lucide-react";

export default function Hero() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="w-full">
      <ul className="flex md:hidden items-center py-3 border-3 justify-center gap-5 text-sm text-white font-light">

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link  href="/?category=Men#collection">
              Men
            </Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Women#collection">
              Women
            </Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Kids#collection">
              Kids
            </Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Recommendations#collection">
              Recommendations
            </Link>
          </li>

        </ul>
      <div className="relative w-full h-[45vh] min-h-[500px]">
        {/* Background image */}

        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-34 left-8 md:left-16 z-10 max-w-xl">
          {!session || 
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Hi, {session?.user.name}
          </h1>
          }
          <p className="text-sm font-semibold tracking-wide text-gray-200 mb-2">
            Luxury Watch Brands
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Timeless Elegance on Your wrist
          </h1>

          <div className="flex gap-3 mr-5">
            <Link
              href="#collection"
              className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-2xl hover:bg-white/80 transition"
            >
              Explore Collection
            </Link>
            {status === "loading" ? (<button className="flex items-center gap-2 bg-gray-500/40 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500/60 transition">Loading...</button>) : !session ?
            (<button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex items-center gap-2 bg-gray-500/40 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500/60 transition"
            >
              <UserRoundArrowLeft className="w-5 h-5" />
              Sign In
            </button>) : (<button className="flex items-center gap-2 bg-gray-500/40 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500/60 transition" >View New Arrival</button>) }
            
          </div>
        </div>
        {/* Clock Types Navigation */}
        <ul className="absolute flex w-full bottom-0 text-white  items-center px-3 py-3  justify-center gap-5 text-sm text-white font-light">

          <li className=" flex flex-col items-center hover:border-black cursor-pointer border-2 p-2 rounded"> 
            <Watch />
            <Link  href="#collection">
              Wrist Watches
            </Link>
           

          </li>

          <li className=" hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center border-1 border-2 py-2 px-1 rounded">
            <Clock />
            <Link href="#collection">
              Wall Clocks
            </Link>
          </li>

          <li className=" hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center border-1 border-2 p-2 rounded">
            <AlarmClock />
            <Link href="#collection">
              Alarm Clocks
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}
