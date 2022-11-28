import React, { useContext, useEffect, useState } from "react";
import {AxiosError, AxiosResponse} from "axios";

// types
import {Page} from "../../types/page";
import {Post} from "../../types/post";

// api
import {getAll} from "../../service/post.service";

// context
import { AuthContext } from "../../contexts/auth";

// styles
import { Line } from "./styles";

// components
import { GridThreeColumn } from "../../components/Grids/GridThreeColumn";
import { Navbar } from "../../components/Navbar";
import { NavbarBottom } from "../../components/NavbarBottom";
import { Post as PostComponent } from "../../components/Post/PostComponent";
import { PostInputComponent } from "../../components/Post/PostInput";
import { Sidebar } from "../../components/Sides/Sidebar";
import { Loading } from "../../components/Loading";
import { Message } from "../../components/SystemMessage";
import { RightSide } from "../../components/Sides/RightSide";
import { LeftSide } from "../../components/Sides/LeftSide";

export const FeedPage = () => {
  document.title = "Feed | MyPortfy";
  const { logout } = useContext(AuthContext);
  const [page, setPage] = useState<Page<Post>>();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [updated, setUpdated] = useState<boolean>(false)

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleUpdated = () => {
    setUpdated(!updated);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const data = "?sort=createdAt,desc"
    function onSuccess(response: AxiosResponse){
      const page = response.data;
      setPage(page);
      setLoading(false);
    }

    function onError(error: AxiosError){
      if (error.response.status === 403) {
        setLoading(false);
        return logout();
      }
    }
    getAll({onError, onSuccess, data})
  }, [logout, showForm, updated]);

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
                  <PostComponent key={post.id} props={post} toggleUpdated={toggleUpdated}/>
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
