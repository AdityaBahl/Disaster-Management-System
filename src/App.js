import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
function App() {
  return (
    <><Navbar /><div>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div></>
  );
}

export default App;
