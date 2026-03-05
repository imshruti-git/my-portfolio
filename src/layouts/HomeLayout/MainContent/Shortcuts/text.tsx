import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div className="App">
      <h1>Previous value with useRef</h1>
      <p>
        <button onClick={() => setCount((value) => value + 1)}>
          Increase counter by 1
        </button>
        <button onClick={() => setCount((value) => value + 10)}>
          Increase counter by 10
        </button>
      </p>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </div>
  );
}
