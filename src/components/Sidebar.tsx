import {
  Bell,
  BookmarksSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";
import TwitterLogo from "../assets/logo-twitter.svg";

import "./Sidebar.css";
export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={TwitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <a className="active" href="">
          <House weight="fill" />
          Home
        </a>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarksSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          List
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}