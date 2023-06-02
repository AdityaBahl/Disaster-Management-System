import './App.css';
import Weather from './pages/Weather';
import Nearbyhelp from './pages/Nearbyhelp';
import Updates from './pages/Updates';
import Tips from './pages/Tips';
import Account from './pages/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/loginpage';
import Signuppage from './pages/Signuppage.js';
import { useEffect, useState } from 'react';
import { auth } from './pages/firebase';
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    })
  });

  return (
    <div className='App flex flex-col items-center justify-center'>
      <Routes>
        <Route path="/Signup" element={<Signuppage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/NearbyHelp" element={<Nearbyhelp />} />
        <Route path="/Updates" element={<Updates />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
  );
}
export default App;