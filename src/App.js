import './App.css';
import Navbar from './components/Navbar';
import Weather from './pages/Weather';
import Nearbyhelp from './pages/Nearbyhelp';
import Updates from './pages/Updates';
import Tips from './pages/Tips';
import Account from './pages/Account';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Weather" element={<Weather />} />
        <Route path="/NearbyHelp" element={<Nearbyhelp />} />
        <Route path="/Updates" element={<Updates />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </>
  );
}
export default App;