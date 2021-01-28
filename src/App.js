
import './App.css';
import Header from './components/Header/Header';
import Profiles from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './Lists/List';

function App() {
  return ( 
  <BrowserRouter>
  <div className="wrapper">
    <Header />
    <List />
    
    <div className="wrapper-content">
    <Route path='/profile' component={Profiles} />
    <Route path='/dialogs' component={Dialogs} />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
