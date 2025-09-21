// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./components/context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChooseCar from "./components/ChooseCars";
import HotOffers from "./components/HotOffers";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import FuelFilter from "./components/FuelFilter";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import News from "./components/News";
import Register from "./pages/Register";
import NewsArticle from "./components/NewsArticle";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Submit from "./pages/Submit";
import CarData from "./components/CarData";
import Commercal from "./pages/Commercal";
import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
// import { LanguageContext } from "./components/context/LanguageContext";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3250);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ScreenLoader />;

  const showNavbarHero = location.pathname !== "/register";

  return (
    <>
      {showNavbarHero && <Navbar />}
      {showNavbarHero && <Hero />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HotOffers />
              <Brands />
              <FuelFilter />
              <CarData />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/soon" element={<ComingSoon />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/submit-ad" element={<Submit />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/cars" element={<ChooseCar />} />
        <Route path="/hot-offers" element={<HotOffers />} />
        <Route path="/repair" element={<ComingSoon />} />
        <Route path="/parts" element={<div>Запчасти</div>} />
        <Route path="/read" element={<News />} />
        <Route path="/commercial" element={<Commercal />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-white">
          <AppContent />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
