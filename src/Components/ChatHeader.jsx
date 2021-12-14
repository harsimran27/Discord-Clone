import React from "react";
import "../css/ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRounded from "@material-ui/icons/EditLocationRounded";
import PeopleAltRounded from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>MY Channel
        </h3>
      </div>
      <div className="chatHeader_right">
        <NotificationsIcon />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader_search">
          <input type="text" placeholder="Search" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
