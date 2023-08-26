import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import "../Header.css";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Update the browser's location using JavaScript
    window.location.href = `/search?query=${searchQuery}`;
  };

  return (
    <div className="header">
      <div className="header_left">
        {" "}
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
      </div>
      <form onSubmit={handleSearchSubmit}>
        <div className="header_input_container">
          <div className="header_input">
            <input
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <SearchIcon className="header_searchbutton" />
          </div>
          <div className="header_mic">
            <MicIcon />
          </div>
        </div>
      </form>
      <div className="header_right">
        <VideoCallIcon />
        <NotificationsIcon />
        <Avatar alt="img" src="" />
      </div>
    </div>
  );
};

export default Header;
