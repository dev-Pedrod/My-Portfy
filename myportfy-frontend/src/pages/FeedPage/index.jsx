import React from "react";

// styles
import { Line } from "./styles";

// components
import { GridThreeColumn } from "../../components/GridThreeColumn";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post } from "../../components/PostComponent";
import { PostInputComponent } from "../../components/PostInputComponent";
import { Sidebar } from "../../components/Sidebar";

export const FeedPage = ({ toggle, isOpen }) => {
  document.title = "Feed - MyPortfy";

  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GridThreeColumn
        middleComponent={
          <>
            <PostInputComponent />
            <Line/>
            <Post />
          </>
        }
      />
      <NavbarBottom />
    </>
  );
};
