import React, { useContext, useEffect, useState } from "react";

// api
import { api } from "../../api/api";

// context
import { AuthContext } from "../../contexts/auth";

// styles
import { Line } from "./styles";

// components
import { GridThreeColumn } from "../../components/Grids/GridThreeColumn";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post } from "../../components/Post/PostComponent";
import { PostInputComponent } from "../../components/Post/PostInput";
import { Sidebar } from "../../components/Sides/Sidebar";
import { Loading } from "../../components/Loading";
import { Message } from "../../components/SystemMessage";
import { RightSide } from "../../components/Sides/RightSide";
import { LeftSide } from "../../components/Sides/LeftSide";

export const FeedPage = () => {
  document.title = "Feed | MyPortfy";
  const [showForm, setShowForm] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { logout } = useContext(AuthContext);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleUpdated = () => {
    setUpdated(!updated);
  };

  const toggleDeleted = () => {
    setDeleted(!deleted);
  };

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
  }, [logout, page.size, showForm, updated]);

  let message = localStorage.getItem("Message");
  let isSuccess = JSON.parse(localStorage.getItem("isSuccess"));

  return (
    <>
      {loading? <Loading/>:
        <>
          <Message text={message} isSuccess={isSuccess}/>
          <Navbar toggle={showDropdown} isOpen={dropdown} showSidebar={showSidebar} />
          <Sidebar isOpen={sidebar} toggle={showSidebar} />
          <GridThreeColumn
            leftComponent={<LeftSide
              firstComponent={"Teste primeiro componente teste primeiro componente"}
              secondComponent={"Teste segundo componente"}
            />}

            middleComponent={
              <>
                <PostInputComponent showForm={showForm} toggle={toggleForm} />
                <Line />
                {page.content.map((post) => (
                  <Post key={post.id} props={post} toggleUpdated={toggleUpdated} toggleDeleted={toggleDeleted}/>
                ))}
              </>
            }

            rightComponent={
              <RightSide
                Title="Testando lado direito"
                firstComponent={"Teste Primeiro componente componente"}
                secondComponent={"Teste segundo componente"}
              />}
          />
          <NavbarBottom />
        </>
      }
    </>
  );
};
