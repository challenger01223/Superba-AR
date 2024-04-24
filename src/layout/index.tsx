import { useLocation } from "react-router-dom";
import { Layout, Flex, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { setAgentTab } from "store/slices/AgentSlice";

import AppSideBar from "./Sidebar";
import CreateAgentHeader from "./headers/CreateAgentHeader";

const { Header, Footer } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { agentTab } = useSelector((state: RootState) => state.agent);
  const location = useLocation();

  return (
    <Layout style={{ background: "white" }}>
      {location.pathname === "/agents/create" ? <></> : <AppSideBar />}
      <Layout>
        <Header
          style={{
            borderBottom: "1px solid rgb(219, 219, 219)",
            position: "sticky",
            width: "100%",
            top: 0,
            height: 80,
            zIndex: 10,
          }}
        >
          {location.pathname === "/agents/create" ? (
            <CreateAgentHeader />
          ) : (
            <></>
          )}
        </Header>
        {children}
        {location.pathname === "/agents/create" ? (
          <Footer
            style={{
              borderTop: "1px solid rgb(219, 219, 219)",
              background: "white",
              position: "sticky",
              bottom: 0,
              width: "100%",
              padding: "20px 50px",
            }}
          >
            <Flex justify="flex-end" gap={10}>
              <Button
                size="large"
                style={{ width: 150 }}
                disabled={agentTab === "model"}
                onClick={() => dispatch(setAgentTab("model"))}
              >
                Back
              </Button>
              <Button
                type="primary"
                danger={agentTab === "clothes"}
                size="large"
                style={{ width: 150 }}
                onClick={() => {
                  if (agentTab === "clothes") {
                  } else {
                    dispatch(setAgentTab("clothes"));
                  }
                }}
              >
                {agentTab === "clothes" ? "Create agent" : "Next"}
              </Button>
            </Flex>
          </Footer>
        ) : (
          <></>
        )}
      </Layout>
    </Layout>
  );
};

export default AppLayout;
