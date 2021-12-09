import { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            {" "}
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={logout}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1}>Логин</Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
