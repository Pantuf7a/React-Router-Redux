import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* Switch component goes through all the Routes and renders the first that matches */}
        <Switch>
          <Route exact path='/'   component={Home} />
          <Route path='/about'    component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;