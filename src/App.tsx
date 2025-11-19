import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DictionaryCard } from "@/components/DictionaryCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex items-start justify-center min-h-screen p-6 bg-gray-100 dark:bg-black text-black dark:text-white">
          <Routes>
            <Route path="/" element={<DictionaryCard />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
