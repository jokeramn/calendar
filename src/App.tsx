import { Layout } from "antd";
import React, { FC, useEffect } from "react";
import AppRoute from "./components/AppRoute";
import Navbar from "./components/Navbar";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUSer } from "./models/IUser";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUSer);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRoute />
      </Layout.Content>
    </Layout>
  );
};

export default App;
