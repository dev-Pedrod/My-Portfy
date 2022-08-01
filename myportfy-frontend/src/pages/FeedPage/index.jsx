import React, { useEffect, useState } from "react";

// api
import { api } from "../../api/api";

// styles
import { Container, Line } from "./styles";

// components
import { GridThreeColumn } from "../../components/GridThreeColumn";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post } from "../../components/PostComponent";
import { PostInputComponent } from "../../components/PostInputComponent";
import { Sidebar } from "../../components/Sidebar";

export const FeedPage = ({ toggle, isOpen }) => {
  document.title = "Feed - MyPortfy";
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [page, setPage] = useState({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 50,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    console.log("Atualizou")
    api.get(`/posts?sort=createdAt,desc&size=${page.size}`).then((response) => {
      const data = response.data;
      setPage(data);      
    });
  }, []);

  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GridThreeColumn
        middleComponent={
          <>
            <PostInputComponent showForm={showForm} toggle={toggleForm} />
            <Line />
            {page.content.map((post) => (
              <Post key={post.id} props={post} />
            ))}
            {page.content.length <= 1 ? <Container /> : null}
          </>
        }
      />
      <NavbarBottom />
    </>
  );
};
