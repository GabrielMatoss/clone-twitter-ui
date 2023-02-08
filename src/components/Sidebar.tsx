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

import { NavLink } from "react-router-dom";

import "./Sidebar.css";
export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={TwitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>
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
