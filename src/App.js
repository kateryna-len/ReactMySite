import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navlink from './NavLinks/Navlink';
import Profiles from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return ( 
  <BrowserRouter>
  <div className="wrapper">
    <Header />
    <Navlink />
    <div className="wrapper-content">
    <Route path='/profile' component={Profiles} />
    <Route path='/dialogs' component={Dialogs} />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
