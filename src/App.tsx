import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, UserProfile } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:user" element={<UserProfile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
