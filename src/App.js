import './App.css';
import Navbar from './components/Navbar';
import Weatherpage from './pages/Weatherpage';
import Nearbyhelppage from './pages/Nearbyhelppage';
import Updatespage from './pages/Updatespage';
import Tipspage from './pages/Tipspage';
import Accountpage from './pages/Accountpage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/WeatherPage" element={<Weatherpage />} />
        <Route path="/NearbyHelpPage" element={<Nearbyhelppage />} />
        <Route path="/UpdatesPage" element={<Updatespage />} />
        <Route path="/TipsPage" element={<Tipspage />} />
        <Route path="/AccountPage" element={<Accountpage />} />
      </Routes>
    </>
  );
}
export default App;