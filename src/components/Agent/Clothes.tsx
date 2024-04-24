import React from "react";
import { Flex, Image, Divider, Typography, Tabs, Card, Row, Col } from "antd";
import { clothes } from "utils/data";
import { UploadOutlined } from "@ant-design/icons";
import CardContainer from "components/CardContainer";

const items = [
  {
    key: "choose",
    label: "Choose or Upload clothes",
  },
  {
    key: "generate",
    label: "Generate clothes",
  },
];

const Clothes = () => {
  const [tab, setTab] = React.useState("choose");
  const [clothesIndex, setClothesIndex] = React.useState(0);
  const [uploadedClothes, setUploadedClothes] = React.useState<any>(null);
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
          src={uploadedClothes ? uploadedClothes : clothes[clothesIndex].image}
        />
      </Flex>
      <Divider />
      <Typography.Title level={3}>
        {tab === "choose"
          ? "Choose your agent's clothes or upload your own"
          : "Generate agent's clothes"}
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
            {clothes.map((clo, index: number) => (
              <Col span={6} xs={8} md={4} key={clo.key} style={{ padding: 5 }}>
                <CardContainer
                  index={index}
                  setItemIndex={setClothesIndex}
                  isSelect={clothesIndex === index}
                >
                  <img src={clo.image} alt="model" style={{ width: "100%" }} />
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

export default Clothes;
