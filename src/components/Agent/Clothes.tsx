import React from "react";
import { Flex, Divider, Typography, Card, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import CardContainer from "components/Agent/CardContainer";
import { RootState } from "store";
import { setClothes, selectClothes } from "store/slices/AgentSlice";

const Clothes = () => {
  const dispatch = useDispatch();
  const { clothes, selectedClothes } = useSelector(
    (state: RootState) => state.agent
  );
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
    dispatch(setClothes([loadFile.preview, ...clothes]));
    dispatch(selectClothes(loadFile.preview));
  };

  return (
    <React.Fragment>
      <Typography.Title level={4}>
        Choose your agent's clothes or upload your own
      </Typography.Title>
      <Divider />
      <Card>
        <Row>
          <Col span={12} xs={8} md={6} style={{ padding: 5 }}>
            <CardContainer upload={Upload}>
              <Flex vertical justify="center" align="center">
                <UploadOutlined style={{ fontSize: 30, color: "grey" }} />
                <Typography.Title
                  style={{ margin: 0, color: "grey" }}
                  level={5}
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
            <Col span={12} xs={8} md={6} key={index} style={{ padding: 5 }}>
              <CardContainer
                setItem={() => dispatch(selectClothes(clo))}
                isSelect={selectedClothes === clo}
              >
                <img src={clo} alt="model" style={{ width: "100%" }} />
              </CardContainer>
            </Col>
          ))}
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Clothes;
