import React from "react";
import home from "./home.webp";

export const AllProducts = () => {
  return (
    <div class="m-4">
      <h1 class="font-medium text-4xl leading-8 m-2 underline decoration-red-600">
        Our All Products
        {/* <hr class="lg:w-40 lg:mr-60 sm:ml-40 sm:w-2/5 mt-3 h-1 bg-red-600" /> */}
      </h1>
      <div class="m-2">
        <div class="bg-orange-50">
          <h4 class="m-4 p-1 w-20 bg-red-600 text-white font-bold rounded-3xl">
            7% off
          </h4>
          <img class="object-center w-24 h-24 mt-3" src={home} />
        </div>
        <h4 class="text-left">Fresh Line</h4>
        <h4 class="text-left text-red-600">
          $135.78
          <span class="ml-2 line-through text-black">$146.00</span>
        </h4>
      </div>
    </div>
  );
};
