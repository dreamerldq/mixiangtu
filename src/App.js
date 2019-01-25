import React, { Component } from 'react';
import Index from './route/Index/index.js'
import LessonList from './route/LessonList/index.js'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'
import LessonDetail from './route/LessonDetail/index.js'
import TeacherDetail from './route/TeacherDetail/index.js'
import TeachingSystemDetail from './route/TeachingSystemDetail/index.js'
import QuanJing from './route/QuanJing/index.js'
import QuanJingList from './route/QuanJingList/index.js'
import Login from './route/Login/index.js'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
       
        <Router>
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route path="/lessonlist" component={LessonList}/>
              <Route path="/lessondetail" component={LessonDetail}/>
              <Route path="/teacherdetail" component={TeacherDetail}/>
              <Route path="/QuanJing/:img" component={QuanJing}/>
              <Route path="/QuanJingList" component={QuanJingList}/>
              <Route path="/TeachingSystemDetail" component={TeachingSystemDetail}></Route>
              <Route path="/Login" component={Login}></Route>

            </Switch>
        </Router>
       
        <Footer></Footer>
      </React.Fragment>
        
    );
  }
}

export default App;
