import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import About from './Portfolio/About'
import Contact from './Portfolio/Contact'
import Projects from './Portfolio/Projects'
import Resume from './Portfolio/Resume'
import Goals from './Goals/Goals'


  class Main extends Component {
    render(){
      return (
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/projects" component={ Projects } />
          <Route path="/resume" component={ Resume } />
        </Switch>
      )
    }
  }

export default Main
