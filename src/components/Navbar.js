import React, { useState } from "react";
import logo from "./logo.svg";
// import { KeyboardArrowDownIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const Navbar = () => {
  const [valEN, setValEN] = useState("");
  const [valUSD, setValUSD] = useState("");

  const handleChangeEN = (event) => {
    setValEN(event.target.value);
  };
  const handleChangeUSD = (event) => {
    setValUSD(event.target.value);
  };
  return (
    <div class="bg-cyan-900 grid grid-rows-1 grid-flow-col p-1">
      <div class="lg:flex ml-3">
        <img src={logo} alt="logo" class="lg:invisible" />
        <div class="flex lg:visible sm:invisible">
          <PhoneIcon class="m-2 h-5 bg-white" />
          <a href="#" class="m-2 text-white">
            123456789
          </a>
          <MailOutlineIcon class="m-2 h-5 bg-white" />
          <a href="#" class="m-2 text-white">
            xyz@gmail.com
          </a>
        </div>
      </div>
      <div class="grid grid-rows-1">
        <div>
          {/* <Box sx={{ minWidth: 120 }}> */}
          <FormControl sx={{ m: 1, minWidth: 90 }}>
            <InputLabel id="">EN</InputLabel>
            <Select
              // labelId="EN"
              id="demo-simple-select"
              value={valEN}
              label="EN"
              onChange={handleChangeEN}
            >
              <MenuItem value={"EN"}>EN</MenuItem>
              <MenuItem value={"BN"}>BN</MenuItem>
              <MenuItem value={"HN"}>HN</MenuItem>
            </Select>
          </FormControl>
          {/* </Box> */}
        </div>
      </div>
      <div>
        {/* <Box sx={{ minWidth: 120 }}> */}
        <FormControl sx={{ m: 1, minWidth: 90 }}>
          <InputLabel id="">USD</InputLabel>

          <Select
            // labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valUSD}
            label="USD"
            onChange={handleChangeUSD}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"BDT"}>BDT</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </FormControl>
        {/* </Box> */}
      </div>
    </div>
    // </div>
  );
};
