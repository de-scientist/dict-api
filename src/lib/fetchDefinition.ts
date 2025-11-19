import axios from "axios";


export async function fetchDefinition(word: string) {
if (!word) return null;
try {
const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
return res.data;
} catch (error) {
throw new Error("Word not found");
}
}