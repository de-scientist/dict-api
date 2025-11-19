export async function fetchDefinition(word: string) {
  if (!word) return null;
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (!res.ok) throw new Error("Word not found");
  return res.json();
}