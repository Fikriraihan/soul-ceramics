"use client";
import Image from "next/image";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-black text-white px-5 py-6 text-xs">
      <div className="grid grid-cols-9 md:gap-0 gap-2">
        <div className="md:col-span-3 col-span-9 flex flex-col gap-2">
          <div>
            <h6>Fund us</h6>
            <p>800 Hammersmith Street, Melbourne, VIC 3000</p>
          </div>
          <div>
            <h6>Open</h6>
            <p>Mon-Sat - 10.00AM - 6.00PM</p>
            <p>Sunday - 12.00PM - 5.00PM</p>
          </div>
          <div>
            <h6>Contact</h6>
            <p>+61 234 567 89</p>
            <p>help@soulceramics.com</p>
          </div>
          <div>
            <h6>Press</h6>
            <p>press@soulceramic.com</p>
          </div>
        </div>
        <div className="md:col-span-3 col-span-9 flex flex-col gap-2">
          <div>
            <p>Terms and Conditions</p>
            <p>Returns and Exchanges</p>
            <p>Shipping and Handling</p>
            <p>Privacy and Cookies</p>
          </div>
          <div>
            <h6>Payments</h6>
            <p>Mastercard</p>
            <p>Visa</p>
            <p>Amex</p>
            <p>PayPal</p>
            <p>Apple Pay</p>
          </div>
        </div>
        <div className="md:col-span-3 col-span-9 flex flex-col gap-2">
          <div>
            <p>Sign up to our newsletter</p>
            <p>Never miss an update:</p>
          </div>
          <div className="flex flex-col w-52 gap-2">
            {/* <input placeholder="Enter your email" className="border-b pb-1" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
            <button className="border-b-2 text-left pb-1">Submit</button>
          </div>
        </div>
      </div>
      <div className="h-[128px]" />
      <div className="grid grid-cols-6 md:gap-0 gap-4">
        <div className="md:col-span-4 col-span-6 flex items-end">
          <Image src="https://assets-global.website-files.com/657440d3eace4c3a2765e189/6576f8cc0374bc4675840904_Soul-Ceramic_logo.svg" alt="logo" width={238.5} height={100} className="" />
        </div>
        <div className="md:col-span-2 col-span-6">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
