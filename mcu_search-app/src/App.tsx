import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Front from "./Front";
import SearchResult from "./SearchResult";
import CharacterDetail from "./CharacterDetail";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
