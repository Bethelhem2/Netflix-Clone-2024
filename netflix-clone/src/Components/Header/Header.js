import React from "react";
import "../../bootstrap.css";
import './Header.css'
import netflixLogo from '../../Assets/images/netflixLogo.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="external_wrapper sticky-top container-fluid">
      <div className="internal_wrapper d-flex justify-content-between">
        <div className="left_side_wrapper ">
          <ul className="d-flex justify-content-between ">
            <li>
              <img src={netflixLogo} alt="NetflixLogo" width="100" />
            </li>
            <li className="text-decoration-none mr-3">Home</li>
            <li className="mr-3">TvShows</li>
            <li className="mr-3"> Movies</li>
            <li className="mr-3">Latest</li>
            <li className="mr-3">MyList</li>
            <li className="mr-3">Browse By Languages</li>
          </ul>
        </div>
        <div className="right_side_wrapper ">
          <ul className="d-flex justify-content-between">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
