import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useWordStore } from "@/store/useWordStore";

export const SearchBar = ({ onSearch }: { onSearch: () => void }) => {
  const { word, setWord } = useWordStore();
  return (
    <div className="flex gap-3 w-full">
      <Input
        placeholder="Enter a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};
