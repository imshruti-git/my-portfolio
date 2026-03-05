import { Form } from "antd";

export default function useLogic() {
  const [form] = Form.useForm();

  function handleSubmit() {
    alert("here");
  }
  return { form, handleSubmit };
}
