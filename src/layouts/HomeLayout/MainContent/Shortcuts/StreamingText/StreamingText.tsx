import MarkdownText from "@/components/MarkdownText/MarkdownText";
import { useEffect, useState } from "react";

export default function StreamingText({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const chunkSize = 2;

    const interval = setInterval(() => {
      i += chunkSize;
      setDisplay(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [text]);

  return <MarkdownText text={display} />;
}
