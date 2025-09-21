// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChooseCar from "./components/ChooseCars";
import HotOffers from "./components/HotOffers";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
// import NewCar from "./components/NewCar";
import FuelFilter from "./components/FuelFilter";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import News from "./components/News";
import Register from "./pages/Register";
import NewsArticle from "./components/NewsArticle";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Submit from "./pages/Submit";
import CarFilter from "./components/CarFilter";
import CarData from "./components/CarData";
import Commercal from "./pages/Commercal";
import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3250); // реальное время подгрузки
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ScreenLoader />;
  return (
    <Router>
      <div className="bg-white ">
        <Navbar />
        <Hero/>
       


        <Routes>
         <Route
          path="/"
          element={
            <>
              
              {/* <ChooseCar /> */}
              <HotOffers />
              <Brands/>
              <FuelFilter/>
              {/* <CarFilter/> */}
              <CarData/>
              {/* <NewCar/> */}
              {/* <News /> */}
              
            </>
          }
        />
        
        <Route path="/register" element={<Register/>} />
        <Route path="/soon" element={<ComingSoon/>} />
          <Route path="/" element={<Hero />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/submit-ad" element={<Submit />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
        <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/cars" element={<ChooseCar />} />
          <Route path="/hot-offers" element={<HotOffers />} />
          <Route path="/repair" element={<ComingSoon/>} />
          <Route path="/parts" element={<div>Запчасти</div>} />
          <Route path="/read" element={<News/>} />
          <Route path="/commercial" element={<Commercal/>} />
        </Routes>
        

{/* <Brands/>
<FuelFilter/> */}
{/* <NewCar/> */}
        <Footer />
              </div>
    </Router>
  );
}

export default App;
