import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import logo from "./logo.svg";
import home from "./home.webp";
// import Carousel from "react-bootstrap/Carousel";
import { Button } from "@mui/material";

export const Home = () => {
  return (
    <div class="">
      <Carousel
      // showArrows={true}
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
      >
        <div class="sm:invisible lg:visible flex p-4 w-100  bg-stone-100">
          <div>
            <img src={home} class="h-4/5 w-3/5 ml-40" />
          </div>
          <div>
            <p class="text-5xl font-semibold p-3">
              Get groceries
              <br /> delivered within 40 <br />
              minutes
            </p>
            <Button variant="contained" color="error">
              Shop Now
            </Button>
          </div>
        </div>
        <div class="sm:invisible lg:visible flex p-4 w-100 bg-stone-100 ">
          <div>
            <img src={home} class="h-4/5 w-3/5 ml-40" />
          </div>
          <div>
            <p class="text-5xl font-semibold p-3">
              Get groceries
              <br /> delivered within 40 <br />
              minutes
            </p>
            <Button variant="contained" color="error">
              Shop Now
            </Button>
          </div>
        </div>
        <div class="sm:invisible lg:visible flex p-4 w-100 bg-stone-100 ">
          <div>
            <img src={home} class="h-4/5 w-3/5 ml-40" />
          </div>
          <div>
            <p class="text-5xl font-semibold p-3">
              Get groceries
              <br /> delivered within 40 <br />
              minutes
            </p>
            <Button variant="contained" color="error">
              Shop Now
            </Button>
          </div>
        </div>

        {/* <div class="md:p-4 md:w-5/5 md:h-25 md:text-center md:bg-stone-100">
          <p class="text-2xl font-semibold p-3">
            Get groceries delivered within 40 minutes
          </p>
          <Button variant="contained" color="error">
            Shop Now
          </Button>
          <img src={home} />
        </div>
        <div class="p-4 w-5/5 h-25 text-center bg-stone-100">
          <p class="text-2xl font-semibold p-3">
            Get groceries delivered within 40 minutes
          </p>
          <Button variant="contained" color="error">
            Shop Now
          </Button>
          <img src={home} />
        </div>
        <div class="p-4 w-5/5 h-25 text-center bg-stone-100">
          <p class="text-2xl font-semibold p-3">
            Get groceries delivered within 40 minutes
          </p>
          <Button variant="contained" color="error">
            Shop Now
          </Button>
          <img src={home} />
        </div> */}
      </Carousel>

      <div class="m-4 lg:flex">
        <div class="lg:ml-4 grid grid-cols-2 text-left bg-stone-100">
          <div class="m-5 w-50">
            <h4>Till 10 Dec,2021</h4>
            <h2 class="font-bold">25% Special Off Today Only for Vegetables</h2>
            <Button variant="outlined" color="error">
              Shop Now
            </Button>
          </div>
          <div>
            <img src={home} class="h-3/5 w-2/5 ml-10 mt-8" />
          </div>
        </div>

        <div class="lg:ml-4 lg:mt-0 grid grid-cols-2 text-left bg-stone-100 md:mt-4">
          <div class="m-5 w-50">
            <h4>New Offer!</h4>
            <h2 class="font-bold">
              15% Special Off Today Only for Fruits Item.
            </h2>
            <Button variant="outlined" color="error">
              Shop Now
            </Button>
          </div>
          <div>
            <img src={home} class="h-3/5 w-2/5 ml-10 mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
