import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
  Flex,
  Button,
  Row,
  Col,
  Image,
  Card,
  Input,
  Steps,
} from "antd";
import type { RootState } from "store";

import Model from "components/Agent/Model";
import Clothes from "components/Agent/Clothes";
import Conversation from "components/Agent/Conversation";
import Background from "components/Agent/Background";
import Audio from "components/Agent/Audio";
import { steps } from "utils/data";

const { Content, Footer } = Layout;

const CreateAgent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedModel } = useSelector((state: RootState) => state.agent);
  const { step } = useSelector((state: RootState) => state.agent);

  return (
    <React.Fragment>
      <Content
        style={{
          padding: "0px 20px",
          maxWidth: 1000,
          margin: "20px auto 120px auto",
          width: "100%",
        }}
      >
        <Row>
          {step === 2 ? <Col span={24} sm={6}></Col> : null}
          <Col span={24} sm={12} style={{ padding: "0px 20px" }}>
            <Image
              style={{ width: "100%" }}
              src={selectedModel ? selectedModel : ""}
            />
            {step < 4 ? (
              <Card>
                <Input.TextArea
                  style={{ resize: "none", fontSize: 20 }}
                  placeholder={`Please input prompt to generate ${
                    step === 0
                      ? "model"
                      : step === 1
                      ? "clothes"
                      : step === 2
                      ? "person"
                      : "background"
                  }...`}
                />
                <Flex justify="flex-end" style={{ marginTop: 15 }}>
                  <Button size="large" type="primary">
                    {step === 0
                      ? "Generate model"
                      : step === 1
                      ? "Generate clothes"
                      : step === 2
                      ? "Generate person"
                      : "Generate background"}
                  </Button>
                </Flex>
              </Card>
            ) : step === 6 ? (
              <Card>
                <Conversation />
              </Card>
            ) : null}
          </Col>
          {step === 2 ? <Col span={24} sm={6}></Col> : null}
          <Col span={24} sm={12}>
            {step === 0 ? (
              <Model />
            ) : step === 1 ? (
              <Clothes />
            ) : step === 2 ? null : step === 3 ? (
              <Background />
            ) : step === 4 ? (
              <Audio />
            ) : null}
          </Col>
        </Row>
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
        <Flex justify="center">
          <Steps
            style={{ maxWidth: 600, width: "100%" }}
            items={steps.map((s: string, index: number) => {
              return {
                key: index,
                icon: (
                  <Flex align="center" justify="center">
                    <img
                      src={s}
                      width={50}
                      style={{
                        filter: index < step ? "grayscale(100%)" : undefined,
                      }}
                    />
                  </Flex>
                ),
              };
            })}
          />
        </Flex>
      </Footer>
    </React.Fragment>
  );
};

export default CreateAgent;
