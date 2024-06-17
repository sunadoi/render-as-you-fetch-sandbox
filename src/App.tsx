import { Suspense } from "react";
import "./App.css";
import { DataComponent } from "./DataComponent";

const random1To1000 = () => Math.floor(Math.random() * 1000 + 1);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent id={random1To1000()} />
        <DataComponent id={random1To1000()} />
      </Suspense>
    </>
  );
}

export default App;
