import { Suspense } from "react";
import useSWR from "swr";

export const fetcher = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};

export const DataComponent = ({ id }: { id: number }) => {
  const { data } = useSWR(id.toString(), fetcher, { suspense: true });

  return (
    <div>
      <p>
        {data.id} {data.name}
      </p>
    </div>
  );
};

export const NestedDataComponent = ({ id }: { id: number }) => {
  const { data } = useSWR(id.toString(), fetcher, { suspense: true });

  return (
    <div>
      <p>
        {data.id} {data.name}
      </p>
      <Suspense fallback={<div>Nested Component Loading...</div>}>
        <DataComponent id={id + 1} />
      </Suspense>
    </div>
  );
};
