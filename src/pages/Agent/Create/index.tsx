import React from "react";
import { Layout, Flex, Typography, Tabs, Button } from "antd";
import type { TabsProps } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import Model from "components/Agent/Model";
import Clothes from "components/Agent/Clothes";

const { Header, Content, Footer } = Layout;

const items: TabsProps["items"] = [
  {
    key: "model",
    label: "Model",
  },
  {
    key: "clothes",
    label: "Clothes",
  },
  {
    key: "3",
    label: "Tab 3",
  },
];

const CreateAgent = () => {
  const [tab, setTab] = React.useState<string>("model");

  const onChange = (key: string) => {
    setTab(key);
  };

  return (
    <Layout style={{ background: "white", padding: "0px 20px" }}>
      <Header
        style={{
          borderBottom: "1px solid rgb(219, 219, 219)",
          position: "fixed",
          width: "100%",
          top: 0,
          height: 80,
          zIndex: 10,
        }}
      >
        <Flex align="center" justify="space-between" style={{ height: "100%" }}>
          <Typography.Title
            level={2}
            style={{ margin: 0, width: 150, textAlign: "center" }}
          >
            New agent
          </Typography.Title>
          <Tabs
            activeKey={tab}
            items={items}
            onChange={onChange}
            size="large"
            tabBarStyle={{ margin: 0 }}
            tabBarGutter={40}
            className="agent-create-step"
          />
          <Flex style={{ width: 150 }} align="center" justify="flex-end">
            <Button shape="circle" icon={<CloseOutlined />} size="large" />
          </Flex>
        </Flex>
      </Header>
      <Content
        style={{
          maxWidth: 1200,
          margin: "100px auto 100px auto",
          width: "100%",
        }}
      >
        {tab === "model" ? (
          <Model />
        ) : tab === "clothes" ? (
          <Clothes />
        ) : (
          <>Default</>
        )}
      </Content>
      <Footer
        style={{
          borderTop: "1px solid rgb(219, 219, 219)",
          background: "white",
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "20px 50px",
        }}
      >
        <Flex justify="flex-end" gap={10}>
          <Button size="large" style={{ width: 150 }}>
            Back
          </Button>
          <Button type="primary" size="large" style={{ width: 150 }}>
            Next
          </Button>
        </Flex>
      </Footer>
    </Layout>
  );
};

export default CreateAgent;
