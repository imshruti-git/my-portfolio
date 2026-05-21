import ReactMarkdown from "react-markdown";
export default function MarkdownText({ text }: { text: string }) {
  const reactMarkdownComponents = () => {
    return {
      p: ({ ...props }) => (
        <p {...props} style={{ margin: "0", whiteSpace: "pre-line" }}>
          {props.children}
        </p>
      ),
      a: ({ ...props }) => (
        <a {...props} style={{ color: "#4040a6" }}>
          {props.children}
        </a>
      ),
      pre: ({ ...props }) => (
        <pre {...props} style={{ margin: "0", whiteSpace: "pre-line" }}>
          {props.children}
        </pre>
      ),
    };
  };

  return (
    <ReactMarkdown components={reactMarkdownComponents()}>{text}</ReactMarkdown>
  );
}
