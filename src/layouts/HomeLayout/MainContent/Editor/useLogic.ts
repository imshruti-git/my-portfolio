import useHomeContext from "@/context/Home/useHomeContext";
import { Form } from "antd";
import type { FormValueI } from "./Editor.d";

export default function useLogic() {
  const [form] = Form.useForm();

  const { setMessages } = useHomeContext();

  // FUNCTIONS
  function handleSubmit(values: FormValueI) {
    const myQuery = {
      id: Date.now(),
      msg: values?.text || "",
      ownMsg: true,
      timestamp: Date.now(),
    };
    // add own msg in list
    setMessages((cur) => [...cur, myQuery]);
    form.resetFields();
    setTimeout(() => {
      const standardAnswer = {
        id: Date.now() + 1,
        msg: `Great question! 😊\n\nJust a heads-up, this portfolio is a **frontend demo** showcasing my UI and development skills. There's no AI or backend integrated here, so I can't generate dynamic answers.\n\nBut don't let that stop you! You can:\n- Use the **shortcut buttons** to explore my experience, skills, education, and more\n- Or reach out to me **directly** — I'd love to chat! 👇\n\n📧 **Email:** vaidya.shruti1108@gmail.com\n📞 **Phone:** +977-9843419511\n💼 **LinkedIn:** [Let's connect!](https://linkedin.com)\n\nI'm always open to new conversations, opportunities, or just a good tech discussion. 🚀`,
        ownMsg: false,
        timestamp: Date.now(),
      };

      setMessages((cur) => [...cur, standardAnswer]);
    }, 900);
  }
  return { form, handleSubmit };
}
