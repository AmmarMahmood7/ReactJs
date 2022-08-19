import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../tmIcon.png";

const Navbar = () => {
  const linksDivContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (isOpen) {
      linksDivContainerRef.current.style.height = `${linksHeight}px`;
      console.log(linksDivContainerRef.current.style.height);
    } else {
      linksDivContainerRef.current.style.height = "0px";
    }
  }, [isOpen]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button
            className="nav-toggle"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {" "}
            <FaBars />{" "}
          </button>
        </div>
        <div className="links-container" ref={linksDivContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
