import React from 'react';
import './App.sass';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cover from './components/Cover/Cover';
import LoginForm from './components/Forms/LoginForm';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal content={<LoginForm/>} />
      <div className='columns max-width-desktop'>
        <div className='column is-2'>
        <p>jcbneivuewrovnrewovnrwujivni  rjuwbvirwbtpi</p>
        </div>
        <div className='column is-8'>
          <Switch>
            <Route exact path='/' component={Cover} />
            <Route exact path='/login' component={LoginForm} />
          </Switch>
        </div>
        <div className='column is-2 is-info'>
          <p>jcbneivuewrovnrewovnrwujivni  rjuwbvirwbtpi</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
