import { Button } from "@/components/ui/button";

export const DefinitionBlock = ({ data }: { data: any }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-4">
      {data[0]?.phonetics?.map((phon: any, idx: number) => (
        phon.audio ? (
          <Button key={idx} onClick={() => new Audio(phon.audio).play()} className="mb-2">
            ▶ Play Pronunciation {phon.text ? `(${phon.text})` : ''}
          </Button>
        ) : null
      ))}

      {data[0]?.meanings?.map((meaning: any, i: number) => (
        <div
          key={i}
          className="border p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 animate-pulse">
          <p className="italic font-medium">{meaning.partOfSpeech}</p>
          {meaning.definitions.map((def: any, j: number) => (
            <p key={j} className="text-sm mt-2">• {def.definition}</p>
          ))}
        </div>
      ))}
    </div>
  );
};