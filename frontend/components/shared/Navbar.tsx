"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import { cartSelector } from "@/store/cart-store";
import Cart from "./Cart";

const Navbar = () => {
  const pathname = usePathname();
  const totalItemsInCart = cartSelector.use.totalItems();

  return (
    <>
      {pathname === "/" && <Banner />}
      <div className="navbar sticky top-0 z-50 bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#9F9488] rounded-box w-52">
              <li>
                <Link className="p-2" href="/shop">
                  Shop V1
                </Link>
              </li>

              <li>
                <Link className="p-2" href="/shop-02">
                  Shop V2
                </Link>
              </li>

              <li>
                <Link className="p-2" href="/collections">
                  Collections
                </Link>
              </li>

              <li>
                <Link className="p-2" href="/journal">
                  Journal
                </Link>
              </li>

              <li>
                <Link className="p-2" href="/shop">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[400px]">
            <a href="/" className="btn btn-ghost">
              {/* Responsive Image setup */}
              <Image src={"/logo.svg"} alt="logo" layout="responsive" width={400} height={100} />
            </a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-4 font-medium">
            <li>
              <Link className="p-2" href="/shop">
                Shop V1
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/shop-02">
                Shop V2
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/collections">
                Collections
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/journal">
                Journal
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/shop">
                About
              </Link>
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
