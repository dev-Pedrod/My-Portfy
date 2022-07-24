import React from "react";
import { GridThreeColumn } from "../../components/GridThreeColumn";

// components
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post } from "../../components/PostComponent";
import { Sidebar } from "../../components/Sidebar";

export const FeedPage = ({ toggle, isOpen }) => {
  document.title = "Feed - MyPortfy";

  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GridThreeColumn middleComponent={<Post />} />
      <NavbarBottom />
    </>
  );
};
