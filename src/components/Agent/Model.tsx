import React from "react";
import {
  Flex,
  Image,
  Typography,
  Tabs,
  Divider,
  Card,
  Row,
  Col,
  Input,
  Button,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import CardContainer from "components/CardContainer";
import { RootState } from "store";
import { setModels } from "store/slices/AgentSlice";

const items = [
  {
    key: "choose",
    label: "Choose or Upload model",
  },
  {
    key: "generate",
    label: "Generate model",
  },
];

const Model = () => {
  const dispatch = useDispatch();
  const { models } = useSelector((state: RootState) => state.agent);
  const [tab, setTab] = React.useState("choose");
  const [modelIndex, setModelIndex] = React.useState(0);
  const [uploadedModel, setUploadedModel] = React.useState<any>(null);
  const inputFileRef = React.useRef(null);

  const Upload = () => {
    if (inputFileRef.current) {
      const inputElement = inputFileRef.current as HTMLInputElement;
      inputElement.click();
    }
  };

  const UploadModel = (event: any) => {
    const { files } = event.target;
    if (files.length === 0) return;
    const loadFile = Object.assign(files[0], {
      preview: URL.createObjectURL(files[0]),
    });
    setUploadedModel(loadFile);
    dispatch(setModels([loadFile.preview, ...models]));
    setModelIndex(0);
  };

  return (
    <React.Fragment>
      <Flex justify="center">
        <Image
          style={{ maxWidth: 250 }}
          src={models[modelIndex]}
        />
      </Flex>
      <Divider />
      <Typography.Title level={3}>
        {tab === "choose"
          ? "Choose your agent's model or upload your own"
          : "Generate agent's model"}
      </Typography.Title>
      <Tabs
        activeKey={tab}
        size="large"
        onChange={(key: string) => setTab(key)}
        items={items}
      />
      {tab === "choose" ? (
        <Card>
          <Row>
            <Col span={6} xs={8} md={4} style={{ padding: 5 }}>
              <CardContainer upload={Upload}>
                <Flex vertical justify="center" align="center">
                  <UploadOutlined style={{ fontSize: 30, color: "grey" }} />
                  <Typography.Title
                    style={{ margin: 0, color: "grey" }}
                    level={4}
                  >
                    UPLOAD
                  </Typography.Title>
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    ref={inputFileRef}
                    onChange={UploadModel}
                  />
                </Flex>
              </CardContainer>
            </Col>
            {models.map((model, index: number) => (
              <Col span={6} xs={8} md={4} key={index} style={{ padding: 5 }}>
                <CardContainer
                  index={index}
                  setItemIndex={setModelIndex}
                  isSelect={modelIndex === index}
                >
                  <img src={model} alt="model" style={{ width: "100%" }} />
                </CardContainer>
              </Col>
            ))}
          </Row>
        </Card>
      ) : (
        <Card>
          <Input.TextArea
            style={{ resize: "none", height: 150, fontSize: 20 }}
            placeholder="Please input prompt to generate model..."
          />
          <Flex justify="flex-end" style={{ marginTop: 15 }}>
            <Button size="large" type="primary">
              Generate Model
            </Button>
          </Flex>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Model;
