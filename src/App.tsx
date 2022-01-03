import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileComponent from './components/Profile/ProfileComponent';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props: any): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
  
         
       <HeaderContainer {...props}/>
       
        <Navbar />
        <div className="wrapperContent">
          <Switch>
         
            <Route path="/profile/:userId?" render={() => <ProfileComponent />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" render={() => <Settings />} />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
