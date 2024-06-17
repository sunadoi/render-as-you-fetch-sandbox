import useSWR from "swr";

const fetcher = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};

export const DataComponent = ({ id }: { id: number }) => {
  const { data } = useSWR(id.toString(), () => fetcher(id), { suspense: true });

  return (
    <div>
      <p>
        {data.id} {data.name}
      </p>
    </div>
  );
};
