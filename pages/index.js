import styles from "../styles/Home.module.css";

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <main>
        <h1>Events, function and state</h1>
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      </main>
    </div>
  );
}
