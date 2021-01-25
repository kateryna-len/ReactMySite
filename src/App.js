import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Navlink from './NavLinks/Navlink';
import Profiles from './Profile/Profile';

function App() {
  return ( <div className="wrapper">
    <Header />
    <Navlink />
    <Profiles />
      
    </div>
  );
}

export default App;
