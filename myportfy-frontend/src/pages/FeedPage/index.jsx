import React from "react";
import { GridThreeColumn } from "../../components/GridThreeColumn";

// components
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post } from "../../components/PostComponent";

export const FeedPage = () => {
  document.title = "Feed - MyPortfy";
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <GridThreeColumn middleComponent={<Post />} />
      <NavbarBottom />
    </>
  );
};
