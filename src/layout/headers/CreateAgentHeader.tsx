import { useDispatch } from "react-redux";
import { Flex, Typography, Tabs, Button } from "antd";
import type { TabsProps } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { setAgentTab } from "store/slices/AgentSlice";
import { useNavigate } from "react-router-dom";

const items: TabsProps["items"] = [
  {
    key: "model",
    label: "Model",
  },
  {
    key: "clothes",
    label: "Clothes",
  },
];

const CreateAgentHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { agentTab } = useSelector((state: RootState) => state.agent);

  const onChange = (key: string) => {
    dispatch(setAgentTab(key));
  };

  return (
    <Flex align="center" justify="space-between" style={{ height: "100%" }}>
      <Typography.Title
        level={2}
        style={{ margin: 0, width: 150, textAlign: "center" }}
      >
        New agent
      </Typography.Title>
      <Tabs
        activeKey={agentTab}
        items={items}
        onChange={onChange}
        size="large"
        tabBarStyle={{ margin: 0 }}
        tabBarGutter={40}
        className="agent-create-step"
      />
      <Flex style={{ width: 150 }} align="center" justify="flex-end">
        <Button
          // onClick={() => navigate("/agents")}
          shape="circle"
          icon={<CloseOutlined />}
          size="large"
        />
      </Flex>
    </Flex>
  );
};

export default CreateAgentHeader;
