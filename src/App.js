import React, { Component } from 'react';
import Index from './route/Index/index.js'
import LessonList from './route/LessonList/index.js'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'
import LessonDetail from './route/LessonDetail/index.js'
import TeacherDetail from './route/TeacherDetail/index.js'
import TeachingSystemDetail from './route/TeachingSystemDetail/index.js'
import QuanJing from './route/QuanJing/index.js'
import LunboManage from './route/LunboManage/index.js'
import QuanJingList from './route/QuanJingList/index.js'
import Login from './route/Login/index.js'
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
       
        <Router>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/index"/>}></Route>
              <Route path="/index" component={Index}/>
              <Route path="/lessonlist/:id" component={LessonList}/>
              <Route path="/lessondetail" component={LessonDetail}/>
              <Route path="/teacherdetail/:id" component={TeacherDetail}/>
              <Route path="/QuanJing/:img" component={QuanJing}/>
              <Route path="/QuanJingList" component={QuanJingList}/>
              <Route path="/TeachingSystemDetail/:id" component={TeachingSystemDetail}></Route>
              <Route path="/Login" component={Login}></Route>
              <Route path="/LunboManage" component={LunboManage}></Route>

            </Switch>
        </Router>
       
        <Footer></Footer>
      </React.Fragment>
        
    );
  }
}

export default App;
