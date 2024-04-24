import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { RootState } from "store";

const { Sider } = Layout;

const AppSideBar = () => {
  const { collapsed } = useSelector((state: RootState) => state.theme);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: "white" }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
};

export default AppSideBar;
