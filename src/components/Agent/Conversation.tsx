import { Flex, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const Conversation = () => {
  return (
    <div>
      <Flex justify="flex-start">
        <div
          style={{
            borderWidth: 0,
            padding: 10,
            backgroundColor: "#EEEEEE",
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Hello, How can I help you?
        </div>
      </Flex>
      <Flex justify="flex-end">
        <div
          style={{
            borderWidth: 0,
            padding: 10,
            backgroundColor: "#1677ff",
            borderRadius: 10,
            color: "white",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          What's your name?
        </div>
      </Flex>
      <Flex justify="flex-start">
        <div
          style={{
            borderWidth: 0,
            padding: 10,
            backgroundColor: "#EEEEEE",
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          My name is Lina
        </div>
      </Flex>
      <Flex justify="flex-end">
        <div
          style={{
            borderWidth: 0,
            padding: 10,
            backgroundColor: "#1677ff",
            borderRadius: 10,
            color: "white",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Nice
        </div>
      </Flex>
      <Input
        style={{ marginTop: 10 }}
        size="large"
        autoComplete="off"
        placeholder="Type a message..."
        suffix={
          <Button
            shape="circle"
            type="primary"
            size="large"
            //   onClick={onSend}
          >
            <SendOutlined />
          </Button>
        }
      />
    </div>
  );
};

export default Conversation;
