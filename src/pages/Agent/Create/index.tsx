import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Flex, Button } from "antd";
import { setAgentTab } from "store/slices/AgentSlice";
import type { RootState } from "store";

import Model from "components/Agent/Model";
import Clothes from "components/Agent/Clothes";
import { useDispatch } from "react-redux";

const { Content, Footer } = Layout;

const CreateAgent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { agentTab } = useSelector((state: RootState) => state.agent);

  return (
    <React.Fragment>
      <Content
        style={{
          padding: "0px 20px",
          maxWidth: 1200,
          margin: "20px auto 20px auto",
          width: "100%",
        }}
      >
        {agentTab === "model" ? (
          <Model />
        ) : agentTab === "clothes" ? (
          <Clothes />
        ) : (
          <></>
        )}
      </Content>
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
            onClick={() => {
              if (agentTab === "model") {
              } else {
                dispatch(setAgentTab("model"));
              }
            }}
          >
            {agentTab === "model" ? "Cancel" : "Back"}
          </Button>
          <Button
            type="primary"
            danger={agentTab === "clothes"}
            size="large"
            style={{ width: 150 }}
            onClick={() => {
              if (agentTab === "clothes") {
                navigate("/agents/1/chat");
              } else {
                dispatch(setAgentTab("clothes"));
              }
            }}
          >
            {agentTab === "clothes" ? "Create agent" : "Next"}
          </Button>
        </Flex>
      </Footer>
    </React.Fragment>
  );
};

export default CreateAgent;
