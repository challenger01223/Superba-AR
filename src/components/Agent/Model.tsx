import React from "react";
import { Flex, Image, Typography, Tabs, Divider, Card, Row, Col } from "antd";
import { models } from "utils/data";
import { UploadOutlined } from "@ant-design/icons";
import CardContainer from "components/CardContainer";

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

  return (
    <React.Fragment>
      <Flex justify="center">
        <Image
          style={{ maxWidth: 250 }}
          src={uploadedModel ? uploadedModel : models[modelIndex].image}
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
                  />
                </Flex>
              </CardContainer>
            </Col>
            {models.map((model, index: number) => (
              <Col
                span={6}
                xs={8}
                md={4}
                key={model.key}
                style={{ padding: 5 }}
              >
                <CardContainer
                  index={index}
                  setItemIndex={setModelIndex}
                  isSelect={modelIndex === index}
                >
                  <img
                    src={model.image}
                    alt="model"
                    style={{ width: "100%" }}
                  />
                </CardContainer>
              </Col>
            ))}
          </Row>
        </Card>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

export default Model;
