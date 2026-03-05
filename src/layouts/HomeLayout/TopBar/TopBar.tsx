import useThemeContext from "@/context/Theme/useThemeContext";
import { Flex } from "antd";
import { Moon, Sun } from "lucide-react";
import { Avatar, Wrapper } from "./TopBar.styles";

export default function TopBar() {
  const { toggleTheme, curTheme } = useThemeContext();
  return (
    <Wrapper>
      <Flex gap={8} align="center">
        <Avatar>SV</Avatar>
        Shruti Vaidya
      </Flex>
      <Flex align="center" onClick={toggleTheme}>
        {curTheme === "LIGHT" ? <Sun /> : <Moon className="h-5 w-5" />}
      </Flex>
    </Wrapper>
  );
}
