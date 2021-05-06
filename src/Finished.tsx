import React, { useState } from "react";
import datingPool from "./dating-pool.json";

function App() {
  const [state, setState] = useState(0);
  const increment = () =>
    setState(datingPool.candidates.length - 1 > state ? state + 1 : 0);
  const { img, title, age, description } = datingPool.candidates[state];
  return (
    <div className="p-4 space-y-4 sm:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 sm:h-screen">
      <header className="font-semibold text-xl text-primary sm:text-black">
        Single sock match
      </header>
      <main className="grid gap-4 bg-white rounded sm:grid-cols-2 sm:p-8">
        <div className="p-4 border rounded shadow w-full flex justify-center sm:row-span-2 sm:justify-self-center">
          <img
            src={img}
            alt="Profile picture"
            className="h-96 object-contain"
          />
        </div>
        <div className="sm:space-y-4">
          <h1 className="text-xl">
            {title}
            <span className="ml-2 text-gray-500">({age})</span>
          </h1>
          <p>{description}</p>
        </div>
        <div className="flex justify-evenly p-4 fixed bottom-0 left-0 w-full sm:grid sm:grid-cols-2 sm:relative sm:items-center sm:w-max sm:mb-0">
          <Button onClick={increment}>❌</Button>
          <span className="hidden sm:block">Crossed</span>
          <Button onClick={increment}>🐻</Button>
          <span className="hidden sm:block">Bear with me</span>
          <Button onClick={increment} className="animate-ping">
            ❤️
          </Button>
          <span className="hidden sm:block">Love it</span>
        </div>
      </main>
    </div>
  );
}

const Button: React.FC<JSX.IntrinsicElements["button"]> = ({
  children,
  className,
  ...rest
}) => (
  <button
    {...rest}
    className={
      "flex items-center justify-center p-4 border border-gray-100 rounded-full shadow h-16 w-16 hover:bg-hover focus:ring-4 ring-primary focus:outline-none hover:animate-pulse"
    }
  >
    {children}
  </button>
);

export default App;
