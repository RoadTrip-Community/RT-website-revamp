"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-none h-[80px] border-t-1 border-b-1 border-black px-6 relative z-50">
      <div className="flex items-center justify-between h-full max-w-[954px] mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-black">
            <div className="flex items-center gap-2">
              <Image
                width={64}
                height={64}
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8"
              />
            </div>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-black text-sm hover:text-gray-700"
            >
              About Us
            </Link>
            <Link
              href="/inside"
              className="text-black text-sm hover:text-gray-700"
            >
              Inside Danfo Bus
            </Link>
            <Link
              href="/partner"
              className="text-black text-sm hover:text-gray-700"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center h-full">
          <Link
            href="https://t.me/+aybU1Ow37IEyODNk"
            target="_blank"
            className="border-l-1 border-black text-base bg-none text-black px-6 w-[144px] font-semibold h-full flex items-center justify-center cursor-pointer"
          >
            JOIN
          </Link>
          <Link
            href="https://flutterwave.com/donate/4l0tmtvm76fk"
            target="_blank"
            className="text-base bg-black text-white px-6 w-[144px] font-semibold h-full flex items-center justify-center cursor-pointer"
          >
            DONATE
          </Link>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col gap-2 justify-center items-end w-12 h-12"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed w-full h-[100vh] inset-0 bg-[#eab75a] z-50 flex flex-col transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex justify-between items-center p-6">
          <span className=" text-xl font-clash text-black font-semibold">
            MENU
          </span>
          <img
            className="text-8xl font-bold"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            src="/x.png"
          />
        </div>
        <div className="flex flex-col justify-start gap-8 p-6">
          <div className="flex flex-col gap-8 mt-8">
            <hr className="border-black" />
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-center text-xl py-4 font-manrope text-black font-medium"
            >
              About Us
            </Link>
            <hr className="border-black" />
            <Link
              href="/inside"
              onClick={() => setMenuOpen(false)}
              className="text-center text-xl py-4 font-manrope text-black font-medium"
            >
              Inside Danfo Bus
            </Link>
            <hr className="border-black" />
            <Link
              href="/partner"
              onClick={() => setMenuOpen(false)}
              className="text-center text-xl py-4 font-manrope text-black font-medium"
            >
              Partner With Us
            </Link>
            <hr className="border-black" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Link
            href="/join"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center h-[80px] flex items-center justify-center text-lg uppercase border-t border-black bg-[#eab75a] font-clash text-black font-semibold"
          >
            JOIN
          </Link>
          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center h-[80px] uppercase font-clash w-full text-center text-lg font-bold bg-black text-white"
          >
            DONATE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
