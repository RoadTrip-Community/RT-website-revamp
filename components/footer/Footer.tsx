import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#FEF9EC] py-20 md:px-0 px-4">
      <div className="max-w-[954px] mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-start mb-20">
          {/* Navigation Links */}
          <div className="w-full flex justify-between gap-8 flex-col md:flex-row">
            {/* Logo */}
            <div className="flex flex-col md:items-center items-start">
              <Image
                src="/comm.png"
                alt="Roadtrip Community"
                width={192}
                height={65}
              />
            </div>
            <div>
              <h3 className="text-black font-clash font-medium mb-4">
                OUR INITIATIVES
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Masterclasses
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Mental Health Sessions
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Open Source Projects
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Sprout & Sparkle
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Spotlights
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-black font-clash font-medium mb-4">
                INSIDE DANFO BUS
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/inside#penpals"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  RT Stories
                </Link>
                <Link
                  href="/inside#featured"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Featured Portfolios
                </Link>
                <Link
                  href="/inside#passenger"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  The {"Passenger's"} Experience
                </Link>
                <Link
                  href="/inside#article"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Article of the Day
                </Link>
                <Link
                  href="https://roadtripcommunity.substack.com/"
                  target="_blank"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Stories from RT Pen Pals
                </Link>
                {/* <Link
                  href="/inside#footprints"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Our Footprints
                </Link> */}
                <Link
                  href="/inside#onboard"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Join Community
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-black font-clash font-medium mb-4">
                PARTNER WITH US
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  About Us
                </Link>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd9MaZHwqpVxZUw0NhmHxTv99aEQTM6MNbUtacbxu8GOVhAPA/viewform?usp=preview"
                  target="_blank"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Become a Partner
                </Link>
                <Link
                  href="https://flutterwave.com/donate/4l0tmtvm76fk"
                  target="_blank"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Donate
                </Link>
                <Link
                  href="https://rt-swags.qshop.ng"
                  target="_blank"
                  className="text-sm text-[#111413] hover:text-gray-700"
                >
                  Shop RT Swags
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:items-center flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-[#111413] mt-4">
            Copyright © Roadtrip Community {new Date().getFullYear()}
          </p>
          <div className="flex md:items-center gap-4 flex-col md:flex-row">
            <Link
              href="/privacy"
              className="text-sm text-[#111413] hover:text-gray-700"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Link
                href="https://x.com/roadtripcomm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/twi.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/ins.png" alt="Instagram" width={24} height={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/roadtrip-community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/lin.png" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/you.png" alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
