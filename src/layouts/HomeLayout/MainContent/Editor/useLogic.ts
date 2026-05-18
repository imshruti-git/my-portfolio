import useHomeContext from "@/context/Home/useHomeContext";
import { Form } from "antd";

export default function useLogic() {
  const [form] = Form.useForm();

  const { setMessages } = useHomeContext();

  // FUNCTIONS
  function handleSubmit() {
    console.log(form?.getFieldsValue(), "query");
    const myQuery = {
      id: 10,
      msg: "query?.msg",
      ownMsg: true,
      timestamp: Date.now(),
    };
    // add own msg in list
    setMessages((cur) => [...cur, myQuery]);
    setTimeout(() => {
      const standardAnswer = {
        id: 10,
        msg: "Thanks for your question! This is a demo portfolio. In a real implementation, you could integrate with an AI API or custom backend to provide dynamic responses based on your actual portfolio data.",
        ownMsg: false,
        timestamp: Date.now(),
      };

      setMessages((cur) => [...cur, standardAnswer]);
    }, 900);
  }
  // function handleSubmit() {
  //   alert("here");
  // }
  return { form, handleSubmit };
}
