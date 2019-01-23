import React, { Component } from 'react';
import Index from './route/Index/index.js'
import LessonList from './route/LessonList/index.js'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div>
        <Router>
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route path="/lesson" component={LessonList}/>
            </Switch>
        </Router>
        </div>
        <Footer></Footer>
      </div>
        
    );
  }
}

export default App;
