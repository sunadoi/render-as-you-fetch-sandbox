import { Suspense } from "react";
import "./App.css";
import { DataComponent, NestedDataComponent, fetcher } from "./DataComponent";
import useSWR, { preload } from "swr";

const random1 = Math.floor(Math.random() * 1000 + 1);
// const random2 = Math.floor(Math.random() * 1000 + 1);

preload(random1.toString(), fetcher);
preload((random1 + 1).toString(), fetcher); // ネストしたコンポーネント内のデータフェッチ
// preload(random2.toString(), fetcher);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <DataComponent id={random1} />
      <DataComponent id={random2} /> */}
      <NestedDataComponent id={random1} />
    </Suspense>
  );
}
