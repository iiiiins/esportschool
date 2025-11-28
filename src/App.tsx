import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import StaffMarketplace from './pages/StaffMarketplace';
import CommunityPage from './pages/CommunityPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import WhatIsEsportsPage from './pages/WhatIsEsportsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="marketplace" element={<StaffMarketplace />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="what-is-esports" element={<WhatIsEsportsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
