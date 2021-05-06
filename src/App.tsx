import React, { useState } from "react";
import datingPool from "./dating-pool.json";

function App() {
  const [state, setState] = useState(0);
  const increment = () => setState(state + 1);
  const { img, title, age, description } = datingPool.candidates[state];
  return (
    <div>
      <header>Single sock match</header>
      <main>
        <div>
          <img src={img} alt="Profile picture" />
        </div>
        <div>
          <h1>
            {title}
            <span>({age})</span>
          </h1>
          <p>{description}</p>
        </div>
        <div>
          <Button onClick={increment}>❌</Button>
          <span>Crossed</span>
          <Button onClick={increment}>🐻</Button>
          <span>Bear with me</span>
          <Button onClick={increment}>❤️</Button>
          <span>Love it</span>
        </div>
      </main>
    </div>
  );
}

const Button: React.FC<JSX.IntrinsicElements["button"]> = ({
  children,
  ...rest
}) => <button {...rest}>{children}</button>;

export default App;
