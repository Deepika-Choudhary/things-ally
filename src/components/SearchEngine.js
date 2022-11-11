import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import logo from "./logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "Home",
  "Mega Menu",
  "Full Screen Menu",
  "Pages",
  "User Account",
  "Vendor Account",
];
const ITEM_HEIGHT = 48;

export const SearchEngine = ({ posts, setSearchResults }) => {
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div class="sticky top-0 flex m-2 z-10 lg:w-100 lg:grid grid-cols-4 bg-slate-100">
      <img src={logo} alt="logo" class="sm:invisible lg:visible ml-3" />
      <form className="search" onSubmit={handleSubmit}>
        <TextField
          // class="ml-40"
          id="search"
          variant="outlined"
          label="Searching for..."
          // className="search__input"
          onChange={handleSearchChange}
        />
      </form>

      <FormControl variant="filled" sx={{ minWidth: 140 }}>
        <InputLabel>All Categories</InputLabel>
        <Select
          id="select"
          value={val}
          label="All Categories"
          onChange={handleChange}
        >
          <MenuItem value={"All Categories"}>All Categories</MenuItem>
          <MenuItem value={"Car"}>Car</MenuItem>
          <MenuItem value={"Clothes"}>Clothes</MenuItem>
          <MenuItem value={"Electronics"}>Electronics</MenuItem>
          <MenuItem value={"Laptop"}>Laptop</MenuItem>
        </Select>
      </FormControl>
      <div class="sm:invisible lg:visible flex ml-60 h-10 bg-slate-100">
        <AccountCircleIcon />
        <ShoppingBagIcon />
      </div>

      <div class="sm:visible lg:invisible">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};
