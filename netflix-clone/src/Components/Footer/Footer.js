import React from 'react'
import './Footer.css'
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="externalWrapper container-fluid">
      <div className="internalWrapper">
        <div className="logoWrapper d-flex justify-content-between">
          <div>
            <FacebookRoundedIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>

          <div>
            <YouTubeIcon />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="border d-inline p-x-5">Server Code</div>
        <div className="copy-right">
          <CopyrightIcon />
          1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer
