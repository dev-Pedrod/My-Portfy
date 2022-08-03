import React, { useContext, useEffect, useState } from "react";

// api
import { api } from "../../api/api";

// context
import { AuthContext } from "../../contexts/auth";

// styles
import { Container, Line } from "./styles";

// components
import { GridThreeColumn } from "../../components/GridThreeColumn";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post } from "../../components/PostComponent";
import { PostInputComponent } from "../../components/PostInputComponent";
import { Sidebar } from "../../components/Sidebar";
import { Loading } from "../../components/LoadingComponent";
import { Message } from "../../components/MessageComponent";

export const FeedPage = () => {
  document.title = "Feed | MyPortfy";
  const [showForm, setShowForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true)
  const { logout } = useContext(AuthContext);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
    api.get(`/posts?sort=createdAt,desc&size=${page.size}`).then((response) => {
      const data = response.data;
      setPage(data);  
      setLoading(false);  
    }).catch((error) => {
      if (error.response.status === 403) {
        setLoading(false);  
        return logout();
      }
    })
  }, [logout, page.size]);

  let message = localStorage.getItem("Message");
  let isSuccess = JSON.parse(localStorage.getItem("isSuccess"));

  return (
    <>
      {loading? <Loading/>:
      <>
        <Message text={message} isSuccess={isSuccess}/>
        <Navbar toggle={toggleDropdown} isOpen={showDropdown} />
        <Sidebar isOpen={showDropdown} toggle={toggleDropdown} />
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
      }
    </>
  );
};
