import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home, UserProfile } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/:user" element={<UserProfile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
