import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useWordStore } from "@/store/useWordStore";
import { fetchDefinition } from "@/lib/fetchDefinition";
import { SearchBar } from "@/components/SearchBar";
import { DefinitionBlock } from "@/components/DefinitionBlock";
import { ThemeToggle } from "@/components/ThemeToggle";

export const DictionaryCard = () => {
  const { word, addToHistory, history } = useWordStore();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["definition", word],
    queryFn: () => fetchDefinition(word),
    enabled: false,
    onSuccess: () => addToHistory(word),
  });

  return (
    <Card className="w-full max-w-lg shadow-xl border rounded-2xl bg-white dark:bg-neutral-900">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg font-bold">Dictionary Lookup</CardTitle>
        <ThemeToggle />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <SearchBar onSearch={refetch} />
        {isLoading && <p className="text-sm">Searching...</p>}
        {isError && <p className="text-red-500 text-sm">Word not found.</p>}
        {data && <DefinitionBlock data={data} />}

        {history.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold">Recent Searches:</p>
            <ul className="list-disc pl-5">
              {history.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};