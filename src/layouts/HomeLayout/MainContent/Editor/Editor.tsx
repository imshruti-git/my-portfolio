import { Form } from "antd";
import Action from "./Action/Action";
import { Wrapper } from "./Editor.styles";
import Input from "./Input/Input";
import useLogic from "./useLogic";

export default function Editor() {
  const { form, handleSubmit } = useLogic();
  return (
    <Wrapper>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name="text">
          <Input />
        </Form.Item>
        <Action />
      </Form>
    </Wrapper>
  );
}
