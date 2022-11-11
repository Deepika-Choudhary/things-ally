import React from "react";
import logo from "./logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div class="lg:flex md:grid-cols-2 sm:grid grid-rows-1 sm:grid-cols-1 p-2 bg-slate-800">
      <div class="m-5 p-5 text-left w-4/5 text-gray-400">
        <img src={logo} alt="logo" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
        id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel
        ut sollicitudin elit at amet.
      </div>
      <div class="m-5 p-5 text-left w-2/5">
        <h3 class="font-bold text-white">About Us</h3>
        <ul class="list-none text-left text-gray-400">
          <li>Career</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div class="m-5 p-5 text-left w-2/5">
        <h3 class="font-bold text-white">Customer Care</h3>
        <ul class="list-none text-gray-400">
          <li>Help Center</li>
          <li>How To Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      <div class="m-5 p-5 text-left w-4/5">
        <h3 class="font-bold text-white">Contact Us</h3>
        <p class="text-gray-400">
          70 Washington Square South, New York, NY 10012, United States <br />
          Email: uilib.help@gmail.com
          <br /> Phone: +1 1123 456 780
        </p>
        <div>
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <GoogleIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};
