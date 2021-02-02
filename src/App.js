
import './App.css';
import Header from './components/Header/Header';
import Profiles from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './Lists/List';

function App(props) {
  
  return ( 
  <BrowserRouter>
  <div className="wrapper">
    <Header />
    <List />
    
    <div className="wrapper-content">
    <Route path='/profile' render = {() => <Profiles 
    state={props.state.profileState}
    addPost={props.addPost}
     />} />
    <Route path='/dialogs' render = {() => <Dialogs state={props.state.dialogsState}  />} />
    
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
