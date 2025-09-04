import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./pages/NewsList";
import Layout from "./layout/Layout";
import MatchingNews from "./pages/MatchingNews";
import NewsView from "./pages/NewsView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsList />} />
          <Route path="/matching-news" element={<MatchingNews />} />
          <Route path="/news-view" element={<NewsView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
