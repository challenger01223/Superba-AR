import React from "react";
import {
  Flex,
  Image,
  Divider,
  Typography,
  Tabs,
  Card,
  Row,
  Col,
  Input,
  Button,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import CardContainer from "components/CardContainer";
import { RootState } from "store";
import { setClothes } from "store/slices/AgentSlice";

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
  const dispatch = useDispatch();
  const { clothes } = useSelector((state: RootState) => state.agent);
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

  const UploadClothes = (event: any) => {
    const { files } = event.target;
    if (files.length === 0) return;
    const loadFile = Object.assign(files[0], {
      preview: URL.createObjectURL(files[0]),
    });
    setUploadedClothes(loadFile);
    dispatch(setClothes([loadFile.preview, ...clothes]));
    setClothesIndex(0);
  };

  return (
    <React.Fragment>
      <Flex justify="center">
        <Image
          style={{ maxWidth: 250 }}
          src={uploadedClothes ? uploadedClothes.preview : clothes[clothesIndex]}
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
                    onChange={UploadClothes}
                    ref={inputFileRef}
                  />
                </Flex>
              </CardContainer>
            </Col>
            {clothes.map((clo, index: number) => (
              <Col span={6} xs={8} md={4} key={index} style={{ padding: 5 }}>
                <CardContainer
                  index={index}
                  setItemIndex={setClothesIndex}
                  isSelect={clothesIndex === index}
                >
                  <img src={clo} alt="model" style={{ width: "100%" }} />
                </CardContainer>
              </Col>
            ))}
          </Row>
        </Card>
      ) : (
        <Card>
          <Input.TextArea
            style={{ resize: "none", height: 150, fontSize: 20 }}
            placeholder="Please input prompt to generate clothes..."
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

export default Clothes;
