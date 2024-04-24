import { useSelector } from "react-redux";
import { Layout } from "antd";
import type { RootState } from "store";

import Model from "components/Agent/Model";
import Clothes from "components/Agent/Clothes";

const { Content } = Layout;

const CreateAgent = () => {
  const { agentTab } = useSelector((state: RootState) => state.agent);

  return (
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
  );
};

export default CreateAgent;
